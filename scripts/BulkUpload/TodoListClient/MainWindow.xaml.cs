//----------------------------------------------------------------------------------------------
//    Copyright 2014 Microsoft Corporation
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
//----------------------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Threading;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

// The following using statements were added for this sample.
using System.Globalization;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Script.Serialization;
using System.Runtime.InteropServices;
using System.Configuration;

namespace TodoListClient
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        //
        // The Client ID is used by the application to uniquely identify itself to Azure AD.
        // The Tenant is the name of the Azure AD tenant in which this application is registered.
        // The AAD Instance is the instance of Azure, for example public Azure or Azure China.
        // The Redirect URI is the URI where Azure AD will return OAuth responses.
        // The Authority is the sign-in URL of the tenant.
        //
        private static string aadInstance = ConfigurationManager.AppSettings["ida:AADInstance"];
        private static string tenant = ConfigurationManager.AppSettings["ida:Tenant"];
        private static string clientId = ConfigurationManager.AppSettings["ida:ClientId"];
        Uri redirectUri = new Uri(ConfigurationManager.AppSettings["ida:RedirectUri"]);

        private static string authority = String.Format(CultureInfo.InvariantCulture, aadInstance, tenant);

        //
        // To authenticate to the To Do list service, the client needs to know the service's App ID URI.
        // To contact the To Do list service we need it's URL as well.
        //
        private static string apiResourceId = ConfigurationManager.AppSettings["todo:apiResourceId"];
        private static string apiBaseAddressLocal = ConfigurationManager.AppSettings["todo:apiBaseAddressLocal"];
        private static string apiBaseAddressDev = ConfigurationManager.AppSettings["todo:apiBaseAddressDev"];
        private static string apiBaseAddressProd = ConfigurationManager.AppSettings["todo:apiBaseAddressProd"];
        private static string apiBaseAddressTarget = ConfigurationManager.AppSettings["todo:apiBaseAddressTarget"];
        private string apiBaseAddress = ConfigurationManager.AppSettings["todo:apiBaseAddressLocal"];

        public HttpClient httpClient = new HttpClient();
        public AuthenticationContext authContext = null;

        private Model.Upload uploadProgress = new Model.Upload();

        public string partnerEntityKey {get; set;}
        public string orgEntityKey { get; set; }

        public  MainWindow()
        {
            InitializeComponent();
            authContext = new AuthenticationContext(authority, new FileCache());

            UploadProgressBar.Visibility = Visibility.Hidden;
            lblUploadCount.Visibility = Visibility.Hidden;

            ExcelFilePathTextBox.IsReadOnly = true;
            SiteUploadProgressRichTextBox.IsReadOnly = true;
            ErrorLabel.Visibility = Visibility.Hidden;
            DownloadButton.Visibility = Visibility.Hidden;
    
        }

        public void GetOrganizations()
        {
            GetOrganizations(true);
        }

        private async void GetOrganizations(bool isAppStarting)
        {
            //
            // Get an access token to call the To Do service.
            //
            AuthenticationResult result = null;
            try
            {
                result = await authContext.AcquireTokenAsync(apiResourceId, clientId, redirectUri, new PlatformParameters(PromptBehavior.Never));
                SignInButton.Content = "Clear Cache";
            }
            catch (AdalException ex)
            {
                // There is no access token in the cache, so prompt the user to sign-in.
                if (ex.ErrorCode == "user_interaction_required")
                {
                    if (!isAppStarting)
                    {
                        MessageBox.Show("Please sign in to view your organizations");
                        SignInButton.Content = "Sign In";
                    }
                }
                else
                {
                    // An unexpected error occurred.
                    string message = ex.Message;
                    if (ex.InnerException != null)
                    {
                        message += "Error Code: " + ex.ErrorCode + "Inner Exception : " + ex.InnerException.Message;
                    }
                    MessageBox.Show(message);
                }

                return;
            }

            // Once the token has been returned by ADAL, add it to the http authorization header, before making the call to access the To Do list service.
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", result.AccessToken);
            httpClient.DefaultRequestHeaders.Add("atr-entity-key", partnerEntityKey);

            // Call the To Do list service.
            HttpResponseMessage response = await httpClient.GetAsync("http://localhost:3000/api" + "/v1/organizations/with-addresses");

            if (response.IsSuccessStatusCode)
            {

                // Read the response and databind to the GridView to display To Do items.
                string s = await response.Content.ReadAsStringAsync();
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                Model.OrganizationResult orgArray = serializer.Deserialize<Model.OrganizationResult>(s);

                if (orgArray != null) {
                    SelectOrganizationListBox.ItemsSource = orgArray.result.Select(org => new Model.Organization(org.organizationName, org.organizationID, org.entityKey));
                }


            }
            else
            {
                MessageBox.Show("An error occurred : " + response.ReasonPhrase);
            }

            return;
        }

        private void ReportStatus(string message, bool newLIne)
        {
            if (newLIne)
            {
                SiteUploadProgressRichTextBox.AppendText(Environment.NewLine + message);
            }
            else
            {
                SiteUploadProgressRichTextBox.AppendText(message);
            }

            SiteUploadProgressRichTextBox.ScrollToEnd();

        }
        
        private void SelectFile(object sender = null, RoutedEventArgs args = null)
        {
            var openFileDialog = new Microsoft.Win32.OpenFileDialog();
            if (openFileDialog.ShowDialog() == true)
            {
                ExcelFilePathTextBox.Text = openFileDialog.FileName;
            }
        }

        public Microsoft.Win32.SaveFileDialog saveFileDialog = new Microsoft.Win32.SaveFileDialog();
        public Microsoft.Win32.SaveFileDialog saveTemplateDialog = new Microsoft.Win32.SaveFileDialog();

        private void Download(object sender = null, RoutedEventArgs args = null)
        {
   
            saveFileDialog.FileOk += SaveFileDialog_FileOk;
            saveFileDialog.FileName = "failed-upload.csv";
            saveFileDialog.ShowDialog();

        }

        private void DownloadTemplate(object sender = null, RoutedEventArgs args = null)
        {
            saveTemplateDialog.FileOk += SaveTemplateDialog_FileOk;
            saveTemplateDialog.FileName = "upload-template.csv";
            saveTemplateDialog.ShowDialog();
        }

        private void SaveTemplateDialog_FileOk(object sender, System.ComponentModel.CancelEventArgs e)
        {
            var fileName = saveTemplateDialog.FileName;
            System.IO.StreamWriter file = new System.IO.StreamWriter(fileName);
            file.Write("site-siteName,site-timezoneID,site-lumicastConfigTag,site-address1,site-address2,site-city,site-stateProvince,site-postalCode,site-country,site-serviceStatus,building-name,floor-name,floor-level,floor-verticalOrder,floor-mapServiceURL,floor-mapServiceType,floorspace-floorSpaceName,floorspace-codeBook_ID,floorspace-idMode,floorspace-fixtureType,floorspace-operatingPoint,floorspace-maxMountingHeight,floorspace-GTHeadingOffset,floorspace-GTHeight,floorspace-GTWidth,floorspace-GTX,floorspace-GTXRotation,floorspace-GTY,floorspace-GTYRotation,floorspace-mapAngleOffsetRadians,floorspace-mapOffsetX,floorspace-mapOffsetY\r\n");
            file.Close();
        }

        private void SaveFileDialog_FileOk(object sender, System.ComponentModel.CancelEventArgs e)
        {
            var fileName = saveFileDialog.FileName;
            
            System.IO.StreamWriter file = new System.IO.StreamWriter(fileName);

            file.Write("Site,Building,Floor,Floorspace,FailedStep,FailedReason,FailedTimeStamp\r\n");

            foreach (var uploadException in uploadProgress.UploadExceptions)
            {
                var site = uploadException.Site == null ? string.Empty : uploadException.Site.siteName;
                var building = uploadException.Building == null ? string.Empty : uploadException.Building.name;
                var floor = uploadException.Floor == null ? string.Empty : uploadException.Floor.name;
                var floorspace = uploadException.Floorspace == null ? string.Empty : uploadException.Floorspace.floorSpaceName;
                var failedStep = uploadException.FailedStep.ToString();
                var failedReason = uploadException.FailedReason;
                var failedDateTime = string.Format("{0}", uploadException.FailedDateTime.ToLongTimeString());

                var line = string.Format("{0},{1},{2},{3},{4},{5},{6}", site, building, floor, floorspace, failedStep, failedReason, failedDateTime);

                file.WriteLine(line);
            }
            
            file.Close();
            
        }

        private void ResetForm()
        {
            SelectOrganizationListBox.SelectedItem = null;
            ExcelFilePathTextBox.Text = "Select File ...";
            ErrorLabel.Visibility = Visibility.Hidden;
            DownloadButton.Visibility = Visibility.Hidden;
            SiteUploadProgressRichTextBox.Document.Blocks.Clear();
            UploadButton.Content = "Upload";
            UploadButton.IsEnabled = true;
            uploadProgress.Reset();
            UploadProgressBar.Visibility = Visibility.Hidden;
            lblUploadCount.Visibility = Visibility.Hidden;
        }

        private void Upload(object sender = null, RoutedEventArgs args = null)
        {
            if (uploadProgress.isFinished())
            {
                ResetForm();

                return;
            }

            //verify instance is selected
            if (SelectInstanceListBox.SelectedItem == null)
            {
                MessageBox.Show("Instance must be selected in order to upload!");
                return;
            }
            
            //verify organization is selected
            if (SelectOrganizationListBox.SelectedItem == null)
            {
                MessageBox.Show("Organization must be selected in order to upload!");
                return;
            }


            //verify file is uploaded
            if (!System.IO.File.Exists(ExcelFilePathTextBox.Text))
            {
                MessageBox.Show("A CSV file is required to upload!");
                return;
            }

            var confirm = MessageBox.Show("Start the upload?", "Confirm Upload", MessageBoxButton.YesNo);

            if (confirm == MessageBoxResult.Yes)
            {

                ReportStatus("Upload is starting ...", false);

                StartUpload();
            }
            
        }

        private void StartUpload()
        {
            UploadButton.IsEnabled = false;
            
            var fileConverter = new FileConverter();
            var skipLine = true;

            ReportStatus("Reading the csv file ...", true);
            
            var lineCount = System.IO.File.ReadAllLines(ExcelFilePathTextBox.Text).Length -1; //need to account for header row

            uploadProgress.Start(lineCount);

            UploadProgressBar.Maximum = lineCount;
            UploadProgressBar.Value = 0;
            UploadProgressBar.Visibility = Visibility.Visible;
            lblUploadCount.Content = string.Format("0 of {0}", lineCount);
            lblUploadCount.Visibility = Visibility.Visible;


            if (lineCount == 0)
            {
                MessageBox.Show("The file does not contina anything to upload!");
                ResetForm();
                return;
            }


            var isFileValid = false;

            var uploadSites = new List<Model.SiteObjectMap>();


            ReportStatus("Converting CSV lines to objects ... ", true);

            using (var fs = System.IO.File.OpenRead(ExcelFilePathTextBox.Text))
            using (var reader = new System.IO.StreamReader(fs))
            {
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();
                    var values = line.Split(',');

                    if (skipLine)
                    {
                        isFileValid = fileConverter.ValidateFile(values); //validate file using header values
                    }

                    if (isFileValid && !skipLine)
                    {
                        var siteObjectMap = new Model.SiteObjectMap()
                        {
                            Organization = (Model.Organization)SelectOrganizationListBox.SelectedItem,
                            Site = fileConverter.Site(values),
                            Building = fileConverter.Building(values),
                            Floor = fileConverter.Floor(values),
                            Floorspace = fileConverter.Floorspace(values)
                        };

                        uploadSites.Add(siteObjectMap);
                    }
                    
                    skipLine = false;
                }
            }

            if (!isFileValid)
            {
                ResetForm();
                MessageBox.Show("Unable to upload - please use the upload template!");
            }

            if (uploadSites.Count > 0)
            {

                ReportStatus("Preparting to upload ... ", true);
                
                StartUploadSite(uploadSites, 0);
            }
        }

        private void StartUploadSite(List<Model.SiteObjectMap> siteObjectMaps, int i)
        {
            
            if (siteObjectMaps.Count > i)
            {
                lblUploadCount.Content = string.Format("{0} of {1}", i + 1, siteObjectMaps.Count);

                CreateSite(siteObjectMaps, i);
            }
            else
            {
                UploadProgressBar.Visibility = Visibility.Hidden;
                lblUploadCount.Visibility = Visibility.Hidden;
                //uploadProgress.Reset();
            }
        }
        

        private async void CreateSite(List<Model.SiteObjectMap> siteObjectMaps, int i)
        {

            var siteObjectMap = siteObjectMaps[i];
            var organization = siteObjectMap.Organization;
            var site = siteObjectMap.Site;

            ReportStatus(string.Format("Creating site - {0} ... ", site.siteName), true);


            AuthenticationResult result = null;
            try
            {
                result = await authContext.AcquireTokenAsync(apiResourceId, clientId, redirectUri, new PlatformParameters(PromptBehavior.Never));
            }
            catch (AdalException ex)
            {

                UploadProgressBar.Visibility = Visibility.Hidden;
                lblUploadCount.Visibility = Visibility.Hidden;
                uploadProgress.Reset();


                // There is no access token in the cache, so prompt the user to sign-in.
                if (ex.ErrorCode == "user_interaction_required")
                {
                    MessageBox.Show("Please sign in to view your organizations");
                    SignInButton.Content = "Sign In";
                }
                else
                {
                    // An unexpected error occurred.
                    string message = ex.Message;
                    if (ex.InnerException != null)
                    {
                        message += "Error Code: " + ex.ErrorCode + "Inner Exception : " + ex.InnerException.Message;
                    }
                    MessageBox.Show(message);
                }

                return;
            }

            // Once the token has been returned by ADAL, add it to the http authorization header, before making the call to access the To Do list service.
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", result.AccessToken);

            //todo: set org id
            site.organization_ID = organization.organizationID;


            JavaScriptSerializer serializer = new JavaScriptSerializer();
            var json = string.Format("[{0}]", serializer.Serialize(site));
            var body = new StringContent(json, Encoding.Default, "application/json");

            httpClient.DefaultRequestHeaders.Add("atr-entity-key", organization.entityKey);
            HttpResponseMessage response = await httpClient.PutAsync(apiBaseAddress + "/site", body);

            if (response.IsSuccessStatusCode)
            {

                ReportStatus(string.Format("Create site complete - {0} ... ", site.siteName), true);

                // Read the response and databind to the GridView to display To Do items.
                string s = await response.Content.ReadAsStringAsync();
                Model.SiteResult siteResult = serializer.Deserialize<Model.SiteResult>(s);
                
                siteObjectMap.Site = siteResult.result[0];
                
                CreateBuilding(siteObjectMaps, i);
                

            }
            else
            {

                uploadProgress.Failed++;

                uploadProgress.UploadExceptions.Add(new Model.UploadException()
                {
                    Site = site,
                    FailedStep = Model.WhenFailed.CreateSite,
                    FailedReason = response.ReasonPhrase
                });


                UploadProgressBar.Value++;
                ReportStatus(string.Format("Create site FAILED - {0} ... ", site.siteName), true);

                StartUploadSite(siteObjectMaps, i + 1);

            }

            return;
        }


        private async void CreateBuilding(List<Model.SiteObjectMap> siteObjectMaps, int i)
        {
            var siteObjectMap = siteObjectMaps[i];
            var site = siteObjectMap.Site;
            var building = siteObjectMap.Building;

            ReportStatus(string.Format("Creating building - {0} ... ", building.name), true);


            AuthenticationResult result = null;
            try
            {
                result = await authContext.AcquireTokenAsync(apiResourceId, clientId, redirectUri, new PlatformParameters(PromptBehavior.Never));
            }
            catch (AdalException ex)
            {

                UploadProgressBar.Visibility = Visibility.Hidden;
                lblUploadCount.Visibility = Visibility.Hidden;
                uploadProgress.Reset();

                // There is no access token in the cache, so prompt the user to sign-in.
                if (ex.ErrorCode == "user_interaction_required")
                {
                    MessageBox.Show("Please sign in to view your organizations");
                    SignInButton.Content = "Sign In";
                }
                else
                {
                    // An unexpected error occurred.
                    string message = ex.Message;
                    if (ex.InnerException != null)
                    {
                        message += "Error Code: " + ex.ErrorCode + "Inner Exception : " + ex.InnerException.Message;
                    }
                    MessageBox.Show(message);
                }

                return;
            }

            // Once the token has been returned by ADAL, add it to the http authorization header, before making the call to access the To Do list service.
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", result.AccessToken);
            
            building.site_ID = site.siteID;

            JavaScriptSerializer serializer = new JavaScriptSerializer();
            var json = string.Format("[{0}]", serializer.Serialize(building));
            var body = new StringContent(json, Encoding.Default, "application/json");

            HttpResponseMessage response = await httpClient.PutAsync(apiBaseAddress + "/building", body);

            if (response.IsSuccessStatusCode)
            {

                ReportStatus(string.Format("Create building complete - {0} ... ", building.name), true);


                string s = await response.Content.ReadAsStringAsync();
                Model.BuildingResult buildingResult = serializer.Deserialize<Model.BuildingResult>(s);
                
                siteObjectMap.Building = buildingResult.result[0];
                
                CreateFloor(siteObjectMaps, i);
                
            }
            else
            {

                uploadProgress.Failed++;

                uploadProgress.UploadExceptions.Add(new Model.UploadException()
                {
                    Site = site,
                    Building = building,
                    FailedStep = Model.WhenFailed.CreateBuilding,
                    FailedReason = response.ReasonPhrase
                });


                UploadProgressBar.Value++;
                ReportStatus(string.Format("Create building FAILED - {0} ... ", building.name), true);

                StartUploadSite(siteObjectMaps, i + 1);

            }

            return;
        }



        private async void CreateFloor(List<Model.SiteObjectMap> siteObjectMaps, int i)
        {
            var siteObjectMap = siteObjectMaps[i];
            var site = siteObjectMap.Site;
            var building = siteObjectMap.Building;
            var floor = siteObjectMap.Floor;

            ReportStatus(string.Format("Creating floor - {0} ... ", floor.name), true);

            AuthenticationResult result = null;
            try
            {
                result = await authContext.AcquireTokenAsync(apiResourceId, clientId, redirectUri, new PlatformParameters(PromptBehavior.Never));
                //SignInButton.Content = "Clear Cache";
            }
            catch (AdalException ex)
            {

                UploadProgressBar.Visibility = Visibility.Hidden;
                lblUploadCount.Visibility = Visibility.Hidden;
                uploadProgress.Reset();


                // There is no access token in the cache, so prompt the user to sign-in.
                if (ex.ErrorCode == "user_interaction_required")
                {
                    MessageBox.Show("Please sign in to view your organizations");
                    SignInButton.Content = "Sign In";
                }
                else
                {
                    // An unexpected error occurred.
                    string message = ex.Message;
                    if (ex.InnerException != null)
                    {
                        message += "Error Code: " + ex.ErrorCode + "Inner Exception : " + ex.InnerException.Message;
                    }
                    MessageBox.Show(message);
                }

                return;
            }

            // Once the token has been returned by ADAL, add it to the http authorization header, before making the call to access the To Do list service.
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", result.AccessToken);

            floor.building_ID = building.buildingID;

            JavaScriptSerializer serializer = new JavaScriptSerializer();
            var json = string.Format("[{0}]", serializer.Serialize(floor));
            var body = new StringContent(json, Encoding.Default, "application/json");

            HttpResponseMessage response = await httpClient.PutAsync(apiBaseAddress + "/floor", body);

            if (response.IsSuccessStatusCode)
            {

                ReportStatus(string.Format("Create floor complete - {0} ... ", floor.name), true);

                // Read the response and databind to the GridView to display To Do items.
                string s = await response.Content.ReadAsStringAsync();
                Model.FloorResult floorResult = serializer.Deserialize<Model.FloorResult>(s);
                
                siteObjectMap.Floor = floorResult.result[0];

                CreateFloorspace(siteObjectMaps, i);

            }
            else
            {
                uploadProgress.Failed++;

                uploadProgress.UploadExceptions.Add(new Model.UploadException()
                {
                    Site = site,
                    Building = building,
                    Floor = floor,
                    FailedStep = Model.WhenFailed.CreateFloor,
                    FailedReason = response.ReasonPhrase
                });

                UploadProgressBar.Value++;
                ReportStatus(string.Format("Create floor FAILED - {0} ... ", floor.name), true);

                StartUploadSite(siteObjectMaps, i + 1);

            }

            return;
        }



        private async void CreateFloorspace(List<Model.SiteObjectMap> siteObjectMaps, int i)
        {
            var siteObjectMap = siteObjectMaps[i];
            var site = siteObjectMap.Site;
            var building = siteObjectMap.Building;
            var floor = siteObjectMap.Floor;
            var floorspace = siteObjectMap.Floorspace;

            ReportStatus(string.Format("Creating floorspace - {0} ... ", floorspace.floorSpaceName), true);

            AuthenticationResult result = null;
            try
            {
                result = await authContext.AcquireTokenAsync(apiResourceId, clientId, redirectUri, new PlatformParameters(PromptBehavior.Never));
            }
            catch (AdalException ex)
            {

                UploadProgressBar.Visibility = Visibility.Hidden;
                lblUploadCount.Visibility = Visibility.Hidden;
                uploadProgress.Reset();

                // There is no access token in the cache, so prompt the user to sign-in.
                if (ex.ErrorCode == "user_interaction_required")
                {
                    MessageBox.Show("Please sign in to view your organizations");
                    SignInButton.Content = "Sign In";
                }
                else
                {
                    // An unexpected error occurred.
                    string message = ex.Message;
                    if (ex.InnerException != null)
                    {
                        message += "Error Code: " + ex.ErrorCode + "Inner Exception : " + ex.InnerException.Message;
                    }
                    MessageBox.Show(message);
                }

                return;
            }

            // Once the token has been returned by ADAL, add it to the http authorization header, before making the call to access the To Do list service.
            httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", result.AccessToken);

            floorspace.site_ID = site.siteID;
            floorspace.floor_ID = floor.floorID;

            JavaScriptSerializer serializer = new JavaScriptSerializer();
            var json = string.Format("[{0}]", serializer.Serialize(floorspace));
            var body = new StringContent(json, Encoding.Default, "application/json");

            HttpResponseMessage response = await httpClient.PutAsync(apiBaseAddress + "/floorSpace", body);

            if (response.IsSuccessStatusCode)
            {
                ReportStatus(string.Format("Create floorspace complete - {0} ... ", floorspace.floorSpaceName), true);

                string s = await response.Content.ReadAsStringAsync();
                Model.FloorspaceResult floorspaceResult = serializer.Deserialize<Model.FloorspaceResult>(s);

                uploadProgress.Passed++;
                UploadProgressBar.Value++;
                
                siteObjectMap.Floorspace = floorspaceResult.result[0];

                StartUploadSite(siteObjectMaps, i + 1);

            }
            else
            {

                uploadProgress.Failed++;

                uploadProgress.UploadExceptions.Add(new Model.UploadException()
                {
                    Site = site,
                    Building = building,
                    Floor = floor,
                    Floorspace = floorspace,
                    FailedStep = Model.WhenFailed.CreateFloorspace,
                    FailedReason = response.ReasonPhrase
                });

                UploadProgressBar.Value++;
                ReportStatus(string.Format("Create floorspace FAILED - {0} ... ", floorspace.floorSpaceName), true);

                StartUploadSite(siteObjectMaps, i + 1);

            }

            return;
        }

        

        private async void SignIn(object sender = null, RoutedEventArgs args = null)
        {
            // If there is already a token in the cache, clear the cache and update the label on the button.
            if (SignInButton.Content.ToString() == "Clear Cache")
            {
                //TodoList.ItemsSource = string.Empty;
                authContext.TokenCache.Clear();
                // Also clear cookies from the browser control.
                ClearCookies();
                SignInButton.Content = "Sign In";
                return;
            }

            //
            // Get an access token to call the To Do list service.
            //
            AuthenticationResult result = null;
            try
            {
                result = await authContext.AcquireTokenAsync(apiResourceId, clientId, redirectUri, new PlatformParameters(PromptBehavior.Always));
                SignInButton.Content = "Clear Cache";
                LaunchPE();
            }
            catch (AdalException ex)
            {
                if (ex.ErrorCode == "access_denied")
                {
                    // The user canceled sign in, take no action.
                }
                else
                {
                    // An unexpected error occurred.
                    string message = ex.Message;
                    if (ex.InnerException != null)
                    {
                        message += "Error Code: " + ex.ErrorCode + "Inner Exception : " + ex.InnerException.Message;
                    }

                    MessageBox.Show(message);
                }

                return;
            }

        }

        private void LaunchPE() {
            //disable main form
            this.IsEnabled = false;
            var pe = new BulkUploadClient.PESelector();
            pe.Show();
            //GetOrganizations();
        }


        // This function clears cookies from the browser control used by ADAL.
        private void ClearCookies()
        {
            const int INTERNET_OPTION_END_BROWSER_SESSION = 42;
            InternetSetOption(IntPtr.Zero, INTERNET_OPTION_END_BROWSER_SESSION, IntPtr.Zero, 0);
        }

        [DllImport("wininet.dll", SetLastError = true)]
        private static extern bool InternetSetOption(IntPtr hInternet, int dwOption, IntPtr lpBuffer, int lpdwBufferLength);

        private void SiteUploadProgressRichTextBox_TextChanged(object sender, TextChangedEventArgs e)
        {

        }

        private void UploadProgressBar_ValueChanged(object sender, RoutedPropertyChangedEventArgs<double> e)
        {
            if (uploadProgress.isFinished())
            {
                UploadProgressBar.Visibility = Visibility.Hidden;
                lblUploadCount.Visibility = Visibility.Hidden;
                UploadButton.Content = "Reset";
                UploadButton.IsEnabled = true;


                if (uploadProgress.HasErrors())
                {
                    ErrorLabel.Visibility = Visibility.Visible;
                    DownloadButton.Visibility = Visibility.Visible;
                }

            }
        }
        
        private void SelectInstanceListBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var instance = SelectInstanceListBox.SelectedItem;
            switch (instance.ToString()) {
                case "Dev":
                    apiBaseAddress = apiBaseAddressDev;
                    break;
                case "QA":
                    //apiBaseAddress = apiBaseAddressQA;
                    break;
                case "Prod":
                    apiBaseAddress = apiBaseAddressProd;
                    break;
                case "Target":
                    apiBaseAddress = apiBaseAddressTarget;
                    break;
                default:
                    apiBaseAddress = apiBaseAddressLocal;
                    break;
            }

        }
    }
}
