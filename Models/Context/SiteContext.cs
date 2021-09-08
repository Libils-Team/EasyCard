using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyCard.Models.Context
{
    public class SiteContext:DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<MainSlider> MainSlider { get; set; }
        public DbSet<Mailing> Mailing { get; set; }
        public DbSet<ProductBrand> Brands { get; set; }
        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Product { get; set; }

        public SiteContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=SQL5103.site4now.net;Initial Catalog=db_a79693_shop;User Id=db_a79693_shop_admin;Password=DataBaseForTest1");
        }
    }
}
