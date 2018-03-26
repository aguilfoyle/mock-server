using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using System.Globalization;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Script.Serialization;
using System.Runtime.InteropServices;
using System.Configuration;

namespace BulkUploadClient
{
    /// <summary>
    /// Interaction logic for PESelector.xaml
    /// </summary>
    public partial class PESelector : Window
    {

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
        private static string apiBaseAddress = ConfigurationManager.AppSettings["todo:apiBaseAddress"];


        public PESelector()
        {
            InitializeComponent();
            GetPartners();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            ((TodoListClient.MainWindow)Application.Current.MainWindow).IsEnabled = true;
            var partner = ComboPartner.SelectedValue;
            var environment = ComboEnvironment.SelectedValue;
            ((TodoListClient.MainWindow)Application.Current.MainWindow).GetOrganizations();
            this.Hide();
        }
        
        private async void GetPartners()
        {
            //
            // Get an access token to call the To Do service.
            //
            AuthenticationResult result = null;
            try
            {
                result = await ((TodoListClient.MainWindow)Application.Current.MainWindow).authContext.AcquireTokenAsync(apiResourceId, clientId, redirectUri, new PlatformParameters(PromptBehavior.Never));
            }
            catch (AdalException ex)
            {
                // There is no access token in the cache, so prompt the user to sign-in.
                if (ex.ErrorCode == "user_interaction_required")
                {
                    MessageBox.Show("Please sign in to view your organizations");
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
            ((TodoListClient.MainWindow)Application.Current.MainWindow).httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", result.AccessToken);

            // Call the To Do list service.
            apiBaseAddress = "http://localhost:3000/api";
            HttpResponseMessage response = await ((TodoListClient.MainWindow)Application.Current.MainWindow).httpClient.GetAsync(apiBaseAddress + "/v1/partners/entities-and-environments");

            if (response.IsSuccessStatusCode)
            {

                // Read the response and databind to the GridView to display To Do items.
                string s = await response.Content.ReadAsStringAsync();
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                TodoListClient.Model.EntitiesEnvironmentsResult entitiesEnvironmentsArray = serializer.Deserialize<TodoListClient.Model.EntitiesEnvironmentsResult>(s);

                ComboPartner.DisplayMemberPath = "partnerName";
                ComboPartner.ItemsSource = entitiesEnvironmentsArray.result.Select(ee => new TodoListClient.Model.EntitiesEnvironments(ee.partnerID, ee.partnerKey, ee.partnerName, ee.environments));

            }
            else
            {
                MessageBox.Show("An error occurred : " + response.ReasonPhrase);
            }

            return;
        }

        private void ComboPartner_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var parnter = (TodoListClient.Model.EntitiesEnvironments)ComboPartner.SelectedItem;

            ComboEnvironment.DisplayMemberPath = "environmentName";
            ComboEnvironment.ItemsSource = parnter.environments;

        }

        private void ComboEnvironment_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            var environment = (TodoListClient.Model.Environment)ComboEnvironment.SelectedItem;
            var key = environment.entityKey;
            ((TodoListClient.MainWindow)Application.Current.MainWindow).partnerEntityKey = key;
        }
    }
}
