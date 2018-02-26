using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Clarissa.Models;
using Microsoft.AspNetCore.Mvc;

namespace Clarissa.Controllers
{
    [Route("api/[controller]")]
    public class ReadingListController : Controller
    {
        [HttpGet("[action]")]
        public ReadingList GetReadingItemList()
        {
            ReadingList readingList = new ReadingList();

            readingList.ReadingItems = new List<ReadingListItem>
            {
                new ReadingListItem
                {
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, ante vel commodo hendrerit, justo ante sagittis metus, eu fringilla.",
                    LogoUrl = "https://bulma.io/images/placeholders/96x96.png",
                    ReadingId = Guid.NewGuid(),
                    Title = "Lorem ipsum dolor sit amet"
                },
                new ReadingListItem()
                {
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, ante vel commodo hendrerit, justo ante sagittis metus, eu fringilla.",
                    LogoUrl = "https://bulma.io/images/placeholders/96x96.png",
                    ReadingId = Guid.NewGuid(),
                    Title = "Lorem ipsum dolor sit amet"
                },
                new ReadingListItem()
                {
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, ante vel commodo hendrerit, justo ante sagittis metus, eu fringilla.",
                    LogoUrl = "https://bulma.io/images/placeholders/96x96.png",
                    ReadingId = Guid.NewGuid(),
                    Title = "Lorem ipsum dolor sit amet"
                },
                new ReadingListItem()
                {
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, ante vel commodo hendrerit, justo ante sagittis metus, eu fringilla.",
                    LogoUrl = "https://bulma.io/images/placeholders/96x96.png",
                    ReadingId = Guid.NewGuid(),
                    Title = "Lorem ipsum dolor sit amet"
                }
            };

            return readingList;
        }
    }
}