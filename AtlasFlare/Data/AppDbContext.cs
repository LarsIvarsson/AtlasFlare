using AtlasFlare.Models;
using Microsoft.EntityFrameworkCore;

namespace AtlasFlare.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<StudentModel> Students { get; set; }
        public DbSet<TeacherModel> Teachers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Insert seed data and relations here...
        }

    }
}
