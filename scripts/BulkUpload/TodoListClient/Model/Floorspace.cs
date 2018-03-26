using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class Floorspace
    {

        public Floorspace()
        {
            this.floorSpaceID = 0;
        }
        
        public string GTHeadingOffset { get; set; }
        public string GTHeight { get; set; }
        public string GTWidth { get; set; }
        public string GTX { get; set; }
        public string GTXRotation { get; set; }
        public string GTY { get; set; }
        public string GTYRotation { get; set; }
        public int codeBook_ID { get; set; }
        public int fixtureType { get; set; }
        public int floorSpaceID { get; set; }
        public string floorSpaceName { get; set; }
        public int floor_ID { get; set; }
        public string idMode { get; set; }
        public string mapAngleOffsetRadians { get; set; }
        public string mapOffsetX { get; set; }
        public string mapOffsetY { get; set; }
        public string maxMountingHeight { get; set; }
        public string operatingPoint { get; set; }
        public int site_ID { get; set; }
    }
}
