using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Clarissa.Models;
using Microsoft.AspNetCore.Mvc;

namespace Clarissa.Controllers
{
    [Route("api/[controller]")]
    public class UserDataController : Controller
    {
        [HttpGet("[action]")]
        public User GetData()
        {
            User user = new User
            {
                Address = new Address
                {
                    City = "Dupy Małe",
                    Country = "Poland",
                    FlatNumber = "2",
                    StreetName = "Dupowa",
                    StreetNumber = "2",
                    ZipCode = "66-666"
                },
                BankNumber = 78979444,
                CustomerId = Guid.NewGuid(),
                DateOfBirth = DateTime.Today,
                FirstName = "Dupson",
                PersonalId = "7894561237",
                PhoneNumber = "789 789 789",
                SecondName = "Dupowaty"
            };

            return user;
        }
    }
}