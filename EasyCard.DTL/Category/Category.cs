using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyCard.DTL.Category
{
    public class Category
    {
        public int Id { get; set; }
        public string Label { get; set; }
        public bool MainCategory { get; set; }
        public string PhotoPath { get; set; }
        public List<Category> DropdownMenu { get; set; }
    }
}
