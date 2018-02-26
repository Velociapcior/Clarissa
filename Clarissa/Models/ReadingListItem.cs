using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Clarissa.Models
{
    public class ReadingListItem
    {
        public Guid ReadingId { get; set; }

        public string Title { get; set; } 

        public string Description { get; set; }

        public string LogoUrl { get; set; }
    }
}
