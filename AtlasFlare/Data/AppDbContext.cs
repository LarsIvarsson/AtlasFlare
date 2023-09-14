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
		public DbSet<QuizModel> Quizzes { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			// Insert seed data and relations here...
			modelBuilder.Entity<TeacherModel>().HasData(new TeacherModel()
			{
				UserId = 1,
				Username = "admin",
				Password = "password",
				IsAdmin = true,
			});
			modelBuilder.Entity<StudentModel>().HasData(new StudentModel()
			{
				UserId = 1,
				Username = "user",
				Password = "password",
			});
		}
	}
}
