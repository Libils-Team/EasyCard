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
        public static List<Models.Product> Get(int id, int offset = 0, int take = 0)
        {
            using (SiteContext db = new SiteContext())
            {
                if (take == 0)
                    return db.Product.Include("ProductCategory").Where(i => i.ProductCategory.Id == id).Skip(offset).ToList();
                else
                    return db.Product.Include("ProductCategory").Where(i => i.ProductCategory.Id == id).Skip(offset).Take(take).ToList();
            }
        }
    }
}
