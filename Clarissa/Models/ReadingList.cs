using System.Collections.Generic;

namespace Clarissa.Models
{
    public class ReadingList
    {
        public ReadingList()
        {
            ReadingItems = new List<ReadingListItem>();
        }

        public List<ReadingListItem> ReadingItems { get; set; }
    }
}
