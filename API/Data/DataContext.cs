using Microsoft.EntityFrameworkCore;
using API.Entity;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "Laptop", Aciklama = "Güçlü bir laptop", Price = 25000, IsActive = true, ImageUrl = "laptop.jpg", Stock = 10 },
                new Product { Id = 2, Name = "Telefon", Aciklama = "Akıllı telefon", Price = 15000, IsActive = true, ImageUrl = "telefon.jpg", Stock = 25 },
                new Product { Id = 3, Name = "Klavye", Aciklama = "Mekanik klavye", Price = 1200, IsActive = true, ImageUrl = "klavye.jpg", Stock = 50 },
                new Product { Id = 4, Name = "Mouse", Aciklama = "Kablosuz mouse", Price = 800, IsActive = true, ImageUrl = "mouse.jpg", Stock = 40 },
                new Product { Id = 5, Name = "Monitör", Aciklama = "4K monitör", Price = 5000, IsActive = true, ImageUrl = "monitor.jpg", Stock = 15 }
            );
        }
    }
}
