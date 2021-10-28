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
        public static List<Models.Product> Get(int categoryId, int offset = 0, int take = 0)
        {
            using (SiteContext db = new SiteContext())
            {
                if (take < 0 || offset < 0)
                    return new List<Models.Product>();
                if (take == 0)
                {
                    return db.Product.AsNoTracking().Include("ProductCategory").Where(i => i.ProductCategory.Id == categoryId).Skip(offset).ToList();
                }
                else
                {
                    return db.Product.AsNoTracking().Include("ProductCategory").Where(i => i.ProductCategory.Id == categoryId).OrderBy(p=>p.Name).Skip(offset).Take(take).ToList();
                }
            }
        }

        public static List<Models.Product> Get(List<int> id)
        {
            using (SiteContext db = new SiteContext())
            {
                return db.Product.AsNoTracking().Include("ProductCategory").Where(i => id.Contains(i.Id)).ToList();
            }
        }
    }
}
