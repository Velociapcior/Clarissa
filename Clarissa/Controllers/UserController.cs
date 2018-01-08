using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Clarissa.Models;
using Microsoft.AspNetCore.Mvc;

namespace Clarissa.Controllers
{
    public class UserController : Controller
    {
        [HttpGet]
        public JsonResult GetData()
        {
            User user = new User
            {
                Address = new Address
                {
                    City = "Dupy Małe",
                    Country = new RegionInfo("Poland"),
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

            return Json(user);
        }
    }
}