using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class AddNewProducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "Apple M2 çipli 13 inç MacBook Pro", "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", "MacBook Pro", 45000m, 8 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "A17 Pro çipli akıllı telefon", "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", "iPhone 15 Pro", 35000m, 15 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "Kablosuz mekanik klavye", "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400", "Logitech MX Keys", 2500m, 30 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "Kablosuz ergonomik mouse", "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400", "Logitech MX Master 3", 1800m, 25 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "34 inç 4K UltraWide monitör", "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400", "LG UltraWide", 12000m, 12 });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Aciklama", "ImageUrl", "IsActive", "Name", "Price", "Stock" },
                values: new object[,]
                {
                    { 6, "12.9 inç iPad Pro M2 çipli", "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400", true, "iPad Pro", 28000m, 10 },
                    { 7, "Gürültü engelleyici kablosuz kulaklık", "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400", true, "AirPods Pro", 6500m, 20 },
                    { 8, "GPS + Cellular akıllı saat", "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400", true, "Apple Watch Series 9", 12500m, 18 },
                    { 9, "Android flagship telefon", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", true, "Samsung Galaxy S24", 28000m, 22 },
                    { 10, "Kablosuz gürültü engelleyici kulaklık", "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", true, "Sony WH-1000XM5", 8500m, 14 },
                    { 11, "Intel i7 işlemcili ultrabook", "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", true, "Dell XPS 13", 38000m, 6 },
                    { 12, "Hibrit oyun konsolu", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", true, "Nintendo Switch", 8500m, 35 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "Güçlü bir laptop", "laptop.jpg", "Laptop", 25000m, 10 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "Akıllı telefon", "telefon.jpg", "Telefon", 15000m, 25 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "Mekanik klavye", "klavye.jpg", "Klavye", 1200m, 50 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "Kablosuz mouse", "mouse.jpg", "Mouse", 800m, 40 });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Aciklama", "ImageUrl", "Name", "Price", "Stock" },
                values: new object[] { "4K monitör", "monitor.jpg", "Monitör", 5000m, 15 });
        }
    }
}
