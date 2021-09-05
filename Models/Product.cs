using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EasyCard.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Cost { get; set; }
        public Category ProductCategory { get; set; }
        public int ProductCode { get; set; }
        public string ProductData { get; set; }
        public string PhotoPath { get; set; }
        public string Description { get; set; }

    }
}
