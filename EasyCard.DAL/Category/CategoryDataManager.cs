using EasyCard.DAL.Context;
using EasyCard.DTL.Category;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyCard.DAL.Category
{
    public class CategoryDataManager : ICategoryDataManager
    {
        public void Add(SubSpecifications model)
        {
            SiteContextStatic.Execute(db => db.SubSpecifications.Add(model));
            SiteContextStatic.Execute(db => db.SaveChanges());
        }
    }
}
