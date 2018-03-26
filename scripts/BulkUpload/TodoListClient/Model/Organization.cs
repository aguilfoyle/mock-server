using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class Organization
    {
        public Organization()
        {
        }

        public Organization(string name, int id, string entityKey)
        {
            this.organizationName = name;
            this.organizationID = id;
        }

        public string role_ID { get; set; }
        public string allSites { get; set; }
        public int organizationID { get; set; }
        public string organizationName { get; set; }
        public string beaconProximityUUID { get; set; }
        public string active { get; set; }
        public string businessAddress_ID { get; set; }
        public string address1 { get; set; }
        public string address2 { get; set; }
        public string city { get; set; }
        public string stateProvince { get; set; }
        public string postalCode { get; set; }
        public string country { get; set; }
        public string contact_ID { get; set; }
        public string contactName { get; set; }
        public string contactNumber { get; set; }
        public string contactRole { get; set; }
        public string sitesAssociated { get; set; }
        public string contactEmail { get; set; }
        public string entityKey { get; set; }
    }
}
