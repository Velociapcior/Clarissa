using System;

namespace Clarissa.Models
{
    public class ReadingQuestion
    {
      public Guid ReadingId { get; set; }
    
      public string Question { get; set; }

      public string OptionFirst { get; set; }

      public Guid OptionFirstReadingId { get; set; }

      public string OptionSecond { get; set; }

      public Guid OptionSecondReadingId { get; set; }
    }
}
