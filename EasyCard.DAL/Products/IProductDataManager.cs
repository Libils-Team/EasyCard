using EasyCard.DTL.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyCard.DAL.Products
{
    public interface IProductDataManager
    {
        List<Product> Get(List<int> id);
        List<Product> Get(int categoryId, int offset = 0, int take = 0);
        Product Get(int id);
    }
}
