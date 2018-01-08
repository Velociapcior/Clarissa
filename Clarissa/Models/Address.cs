using System.Globalization;

namespace Clarissa.Models
{
    public class Address
    {
        public string StreetName { get; set; }

        public string StreetNumber { get; set; }

        public string FlatNumber { get; set; }

        public string City { get; set; }

        public string ZipCode { get; set; }

        public RegionInfo Country { get; set; }
    }
}
