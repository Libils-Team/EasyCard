using EasyCard.DAL.Context;
using EasyCard.DTL.Product;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyCard.DAL.Products
{
    public class ProductDataManager : IProductDataManager
    {
        public List<Product> Get(List<int> id)
        {
            return SiteContextStatic.Execute(db => db.Product.AsNoTracking().Include("ProductCategory").Where(i => id.Contains(i.Id)).ToList());
        }

        public List<Product> Get(int categoryId, int offset = 0, int take = 0)
        {
            if (take < 0 || offset < 0)
                return new List<Product>();
            if (take == 0)
            {
                return SiteContextStatic.Execute(db => db.Product.AsNoTracking().Include("ProductCategory").Include(i=>i.specifications).Where(i => i.ProductCategory.Id == categoryId).Skip(offset).ToList());
            }
            else
            {
                return SiteContextStatic.Execute( db => db.Product.AsNoTracking().Include("ProductCategory").Include(i => i.specifications).Where(i => i.ProductCategory.Id == categoryId).OrderBy(p => p.Title).Skip(offset).Take(take).ToList());
            }
        }

        public Product Get(int id)
        {
            return SiteContextStatic.Execute(db => db.Product.AsNoTracking().Where(i=>i.Id == id).FirstOrDefault());
        }
    }
}
