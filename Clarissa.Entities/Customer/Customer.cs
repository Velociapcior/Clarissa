﻿using System;

namespace Clarissa.Entities.Customer
{
    public class Customer
    {
        public Guid CustomerId { get; set; }

        public string FirstName { get; set; }

        public string SecondName { get; set; }            
        
        public Address Address { get; set; }

        public int BankNumber { get; set; }

        public DateTime DateOfBirth { get; set; }
    }
}
