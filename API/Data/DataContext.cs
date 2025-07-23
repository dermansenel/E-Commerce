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
                new Product { Id = 1, Name = "MacBook Pro", Aciklama = "Apple M2 çipli 13 inç MacBook Pro", Price = 45000, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", Stock = 8 },
                new Product { Id = 2, Name = "iPhone 15 Pro", Aciklama = "A17 Pro çipli akıllı telefon", Price = 35000, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", Stock = 15 },
                new Product { Id = 3, Name = "Logitech MX Keys", Aciklama = "Kablosuz mekanik klavye", Price = 2500, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400", Stock = 30 },
                new Product { Id = 4, Name = "Logitech MX Master 3", Aciklama = "Kablosuz ergonomik mouse", Price = 1800, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400", Stock = 25 },
                new Product { Id = 5, Name = "LG UltraWide", Aciklama = "34 inç 4K UltraWide monitör", Price = 12000, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400", Stock = 12 },
                new Product { Id = 6, Name = "iPad Pro", Aciklama = "12.9 inç iPad Pro M2 çipli", Price = 28000, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400", Stock = 10 },
                new Product { Id = 7, Name = "AirPods Pro", Aciklama = "Gürültü engelleyici kablosuz kulaklık", Price = 6500, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400", Stock = 20 },
                new Product { Id = 8, Name = "Apple Watch Series 9", Aciklama = "GPS + Cellular akıllı saat", Price = 12500, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400", Stock = 18 },
                new Product { Id = 9, Name = "Samsung Galaxy S24", Aciklama = "Android flagship telefon", Price = 28000, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", Stock = 22 },
                new Product { Id = 10, Name = "Sony WH-1000XM5", Aciklama = "Kablosuz gürültü engelleyici kulaklık", Price = 8500, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", Stock = 14 },
                new Product { Id = 11, Name = "Dell XPS 13", Aciklama = "Intel i7 işlemcili ultrabook", Price = 38000, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", Stock = 6 },
                new Product { Id = 12, Name = "Nintendo Switch", Aciklama = "Hibrit oyun konsolu", Price = 8500, IsActive = true, ImageUrl = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", Stock = 35 }
            );
        }
    }
}
