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
                var Categories = db.Categories.AsNoTracking().Include(i=>i.DropdownMenu).ToList();
                return Categories.Where(i=>i.MainCategory).ToList();
            }
        }


        public static void AddCategories()
        {
            using (SiteContext db = new SiteContext())
            {
                List<Category> Categories = new List<Category>();
                Categories.Add(new Category() { Label = "Sub", DropdownMenu = null });
                Categories.Add(new Category() { Label = "Sub2", DropdownMenu = null });
                Categories.Add(new Category() { Label = "Sub3", DropdownMenu = null });
                db.Categories.Add(new Category() { Label = "Main", DropdownMenu = Categories });
                db.SaveChanges();
            }
        }
    }
}
