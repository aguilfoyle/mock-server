using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class SiteObjectMap
    {
        public Organization Organization { get; set; }
        public Site Site { get; set; }
        public Building Building { get; set; }
        public Floor Floor { get; set; }
        public Floorspace Floorspace { get; set; }
    }
}

