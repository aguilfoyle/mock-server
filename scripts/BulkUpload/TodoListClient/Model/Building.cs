using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class Building
    {

        public Building()
        {
            this.buildingID = 0;
            this.active = true;
        }
        
        public bool active { get; set; }
        public int buildingID { get; set; }
        public string name { get; set; }
        public int site_ID { get; set; }
    }
}
