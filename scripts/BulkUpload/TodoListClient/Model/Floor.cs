using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class Floor
    {

        public Floor()
        {
            this.floorID = 0;
            this.active = true;
        }
        
        public bool active { get; set; }
        public int building_ID { get; set; }
        public int floorID { get; set; }
        public string level { get; set; }
        public string mapServiceType { get; set; }
        public string mapServiceURL { get; set; }
        public string name { get; set; }
        public int verticalOrder { get; set; }
    }
}
