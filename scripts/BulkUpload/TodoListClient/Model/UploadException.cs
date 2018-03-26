using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class UploadException
    {

        public UploadException()
        {
            FailedDateTime = DateTime.Now;
        }

        public Site Site { get; set; }
        public Building Building { get; set; }
        public Floor Floor { get; set; }
        public Floorspace Floorspace { get; set; }
        public WhenFailed FailedStep { get; set; }
        public string FailedReason { get; set; }
        public DateTime FailedDateTime { get; set; }

    }

    public enum WhenFailed
    {
        CreateSite,
        CreateBuilding,
        CreateFloor,
        CreateFloorspace
    }
}
