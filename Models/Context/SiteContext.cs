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

        public SiteContext()
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=helloappdb;Trusted_Connection=True;");
        }
    }
}
