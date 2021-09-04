﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyCard.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Money { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
