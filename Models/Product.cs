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
        public string Title { get; set; }
        public decimal PriceCurrent { get; set; }
        public decimal PriceOld { get; set; }
        public string Image { get; set; }
        public string ImageGalery { get; set; }
        public string ShortTitle { get; set; }
        public decimal PriceFrom { get; set; }
        public bool Sale { get; set; }
        public int SaleCount { get; set; }
        public bool Lates { get; set; }
        public bool Code { get; set; }
        public string Description { get; set; }
        public Category ProductCategory { get; set; }
        public string specifications { get; set; }
    }
}
