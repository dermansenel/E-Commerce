namespace API.Entity;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Aciklama { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public bool IsActive { get; set; }
    public string ImageUrl { get; set; } = string.Empty;
    public int Stock { get; set; }
}
