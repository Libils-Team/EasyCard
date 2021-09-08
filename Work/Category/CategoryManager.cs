using EasyCard.Models;
using EasyCard.Models.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyCard.Work
{
    public static class CategoryManager
    {
        public static List<Category> GetCategories()
        {
            using (SiteContext db = new SiteContext())
            {
                return db.Categories.Include("SubCategories").Where(i=>i.MainCategory).Include("SubCategories").ToList();
            }
        }


        public static void AddCategories()
        {
            using (SiteContext db = new SiteContext())
            {
                List<Category> Categories = new List<Category>();
                Categories.Add(new Category() { CategoryName = "Sub", SubCategories = null });
                Categories.Add(new Category() { CategoryName = "Sub2", SubCategories = null });
                Categories.Add(new Category() { CategoryName = "Sub3", SubCategories = null });
                db.Categories.Add(new Category() { CategoryName = "Main", SubCategories = Categories });
                db.SaveChanges();
            }
        }
    }
}
