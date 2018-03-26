using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class Site
    {

        

        public Site()
        {
            this.siteID = 0;
            this.serviceStatus = "INACTIVE";
        }

        public int siteID { get; set; }
        public string siteName { get; set; }
        public int timezoneID { get; set; }
        public string address1 { get; set; }
        public string address2 { get; set; }
        public string city { get; set; }
        public string stateProvince { get; set; }
        public string postalCode { get; set; }
        public string country { get; set; }
        public string serviceStatus { get; set; }
        public int organization_ID { get; set; }
        public string lumicastConfigTag { get; set; }

    }
}
