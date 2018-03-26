using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class EntitiesEnvironments
    {

        public EntitiesEnvironments() {
        }

        public EntitiesEnvironments(int id, string key, string name, List<Environment> environments) {
            this.partnerID = id;
            this.partnerName = name;
            this.environments = environments;
        }

        public int partnerID { get; set; }
        public string partnerKey { get; set; }
        public string partnerName { get; set; }
        public List<Environment> environments { get; set; }
    }
}
