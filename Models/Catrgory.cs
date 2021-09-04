using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyCard.Models
{
    public class Catrgory
    {
        public int Id { get; set; }
        public string CatrgoryName { get; set; }
        public int ChildId { get; set; }
    }
}
