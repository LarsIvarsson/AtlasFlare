using Microsoft.EntityFrameworkCore;

namespace AtlasFlare.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Insert seed data and relations here...
        }

    }
}
