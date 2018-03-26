using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient
{
    class FileConverter
    {

        public bool ValidateFile(string[] values)
        {
            if (values[0] != "site-siteName") { return false; }
            if (values[1] != "site-timezoneID") { return false; }
            if (values[2] != "site-lumicastConfigTag") { return false; }
            if (values[3] != "site-address1") { return false; }
            if (values[4] != "site-address2") { return false; }
            if (values[5] != "site-city") { return false; }
            if (values[6] != "site-stateProvince") { return false; }
            if (values[7] != "site-postalCode") { return false; }
            if (values[8] != "site-country") { return false; }
            if (values[9] != "site-serviceStatus") { return false; }

            if (values[10] != "building-name") { return false; }

            if (values[11] != "floor-name") { return false; }
            if (values[12] != "floor-level") { return false; }
            if (values[13] != "floor-verticalOrder") { return false; }
            if (values[14] != "floor-mapServiceURL") { return false; }
            if (values[15] != "floor-mapServiceType") { return false; }


            if (values[16] != "floorspace-floorSpaceName") { return false; }
            if (values[17] != "floorspace-codeBook_ID") { return false; }
            if (values[18] != "floorspace-idMode") { return false; }
            if (values[19] != "floorspace-fixtureType") { return false; }
            if (values[20] != "floorspace-operatingPoint") { return false; }
            if (values[21] != "floorspace-maxMountingHeight") { return false; }
            if (values[22] != "floorspace-GTHeadingOffset") { return false; }
            if (values[23] != "floorspace-GTHeight") { return false; }
            if (values[24] != "floorspace-GTWidth") { return false; }

            if (values[25] != "floorspace-GTX") { return false; }
            if (values[26] != "floorspace-GTXRotation") { return false; }
            if (values[27] != "floorspace-GTY") { return false; }
            if (values[28] != "floorspace-GTYRotation") { return false; }
            if (values[29] != "floorspace-mapAngleOffsetRadians") { return false; }
            if (values[30] != "floorspace-mapOffsetX") { return false; }
            if (values[31] != "floorspace-mapOffsetY") { return false; }

            return true;
        }

        public Model.Site Site(string[] values)
        {
            //site-siteName             0
            //site-timezoneID           1
            //site-lumicastConfigTag    2
            //site-address1             3
            //site-address2             4
            //site-city                 5
            //site-stateProvince        6
            //site-postalCode           7
            //site-country              8
            //site-serviceStatus        9


            return new Model.Site()
            {
                siteName = getStringValue(values, 0),
                timezoneID = getIntValue(values, 1),
                lumicastConfigTag = getStringValue(values, 2),
                address1 = getStringValue(values, 3),
                address2 = getStringValue(values, 4),
                city = getStringValue(values, 5),
                stateProvince = getStringValue(values, 6),
                postalCode = getStringValue(values, 7),
                country = getStringValue(values, 8),
                serviceStatus = getStringValue(values, 9),
            };
        }

        public Model.Building Building(string[] values)
        {
            //building-name         10

            return new Model.Building()
            {
                name = getStringValue(values, 10),
            };
        }

        public Model.Floor Floor(string[] values)
        {
            //floor-name                11
            //floor-level               12
            //floor-verticalOrder       13
            //floor-mapServiceURL       14
            //floor-mapServiceType      15

            return new Model.Floor() {
                name = getStringValue(values, 11),
                level = getStringValue(values, 12),
                verticalOrder = getIntValue(values, 13),
                mapServiceURL = getStringValue(values, 14),
                mapServiceType = getStringValue(values, 15)
            };
        }

        public Model.Floorspace Floorspace(string[] values)
        {
            //floorspace-floorSpaceName             16
            //floorspace-codeBook_ID                17
            //floorspace-idMode                     18
            //floorspace-fixtureType                19
            //floorspace-operatingPoint             20
            //floorspace-maxMountingHeight          21
            //floorspace-GTHeadingOffset            22
            //floorspace-GTHeight                   23
            //floorspace-GTWidth                    24
            //floorspace-GTX                        25
            //floorspace-GTXRotation                26
            //floorspace-GTY                        27
            //floorspace-GTYRotation                28
            //floorspace-mapAngleOffsetRadians      29
            //floorspace-mapOffsetX                 30
            //floorspace-mapOffsetY                 31


            return new Model.Floorspace() {
                floorSpaceName = getStringValue(values, 16),
                codeBook_ID = getIntValue(values, 17),
                idMode = getStringValue(values, 18),
                fixtureType = getIntValue(values, 19),
                operatingPoint = getStringValue(values, 20),
                maxMountingHeight = getStringValue(values, 21),
                GTHeadingOffset = getStringValue(values, 22),
                GTHeight = getStringValue(values, 23),
                GTWidth = getStringValue(values, 24),
                GTX = getStringValue(values, 25),
                GTXRotation = getStringValue(values, 26),
                GTY = getStringValue(values, 27),
                GTYRotation = getStringValue(values, 28),
                mapAngleOffsetRadians = getStringValue(values, 29),
                mapOffsetX = getStringValue(values, 30),
                mapOffsetY = getStringValue(values, 31),
            };
        }

        private int getIntValue(string[] values, int index)
        {
            //todo: add defensive code 
            int result = 0;
            Int32.TryParse(values[index], out result);
            return result;
        }

        private string getStringValue(string[] values, int index)
        {
            //todo: add defensive code 
            return values[index];
        }
    }
}
