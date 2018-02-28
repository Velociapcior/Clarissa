using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Clarissa.Models;
using Microsoft.AspNetCore.Mvc;

namespace Clarissa.Controllers
{
  [Route("api/[controller]")]
  public class ReadingController : Controller
  {
    [HttpGet("[action]")]
    public Reading GetReading(string readingId)
    {
      Reading reading = new Reading
      {
        Content = @"
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Sed in lacus eget turpis tristique molestie.Nam non magna diam.Donec euismod congue dui.Nam ac enim ante.Nam scelerisque pellentesque tortor,
          sit amet rhoncus justo aliquam a.Proin aliquet purus at eros placerat scelerisque.Donec a porttitor lorem,
          quis eleifend augue.Sed tristique orci et diam cursus,
          luctus commodo mi aliquam.Suspendisse potenti.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Donec nec nisi blandit,
          laoreet nisl ac,
          mattis eros.Praesent bibendum purus eget enim consequat consectetur.Sed quis commodo nunc.Nulla facilisi.Sed faucibus dolor nec efficitur ultricies.

          Sed vitae neque felis.Pellentesque porttitor velit nec mi auctor dapibus.Aliquam congue justo id odio pretium,
          vel maximus lectus semper.Donec dictum orci vel blandit semper.Fusce vitae lobortis quam,
          sit amet vestibulum ligula.Nullam ornare facilisis sapien,
          sed vehicula justo interdum ultricies.Integer imperdiet augue mi,
          ac lacinia arcu eleifend in. Donec lacinia nunc quis elit accumsan,
          et tristique dui auctor.Integer efficitur maximus neque eget vulputate.Praesent tincidunt arcu magna,
          sit amet fringilla nulla posuere id.Quisque accumsan magna non massa ultrices,
          ac egestas sapien ullamcorper.Vestibulum accumsan eleifend ante vel ullamcorper.

          Phasellus quis finibus dolor.Donec fermentum lectus sit amet libero feugiat accumsan.In ut blandit orci.Donec consectetur nunc ut tortor tempus pulvinar.Aliquam sit amet consequat neque.Mauris nec lectus aliquam,
          maximus ante id,
          mollis quam.Proin lacinia fringilla urna,
          sed facilisis ipsum ultrices id.Vestibulum vestibulum nisl quis mi aliquet,
          eget luctus tellus consectetur.Suspendisse vel malesuada purus.Donec ut justo ut velit vulputate pulvinar. ",
        ReadingId = readingId,
        SubTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing. ",
        Title = "Lorem ipsum dolor sit amet."
      };

      return reading;
    }

    public ReadingQuestion GetReadingQuestion(string readingId)
    {
      ReadingQuestion readingQuestion = new ReadingQuestion
      {
        ReadingId = Guid.Parse(readingId),
        OptionFirst = "Lorem",
        OptionFirstReadingId = Guid.NewGuid(),
        OptionSecond = "Ipsum",
        OptionSecondReadingId = Guid.NewGuid(),
        Question = "Phasellus quis finibus dolor.Donec fermentum lectus sit amet"
      };

      return readingQuestion;
    }
  }
}