using EasyCard.Models.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyCard.Work.Product
{
    public static class ProductManager
    {
        public static List<Models.Product> Get(int id)
        {
            using(SiteContext db = new SiteContext())
            {
                return db.Product.Include("ProductCategory").Where(i => i.ProductCategory.Id == id).ToList();
            }
        }
    }
}
