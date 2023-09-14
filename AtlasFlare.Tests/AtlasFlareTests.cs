using AtlasFlare.Controllers;
using AtlasFlare.Data;
using AtlasFlare.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace AtlasFlare.Tests
{
	[TestClass]
	public class AtlasFlareTests
	{
		private AppDbContext MockDbContext()
		{
			var serviceProvider = new ServiceCollection()
			.AddEntityFrameworkInMemoryDatabase()
			.BuildServiceProvider();

			var options = new DbContextOptionsBuilder<AppDbContext>()
				.UseInMemoryDatabase(databaseName: "InMemoryDb")
				.UseInternalServiceProvider(serviceProvider)
				.Options;

			return new AppDbContext(options);
		}

		[TestMethod]
		public async Task TestGetUserIdAsync()
		{
			// Arrange
			var dbContext = MockDbContext();

			dbContext.Students.Add(new StudentModel { UserId = 1, Username = "user1", Password = "password1" });
			dbContext.Students.Add(new StudentModel { UserId = 2, Username = "user2", Password = "password2" });
			dbContext.SaveChanges();

			UserController userController = new(dbContext);

			// Act
			var result = await userController.Get("user2");

			// Assert
			Assert.AreEqual(2, result);

		}

		[TestMethod]
		public async Task TestCreateUserAsync()
		{
			// Arrange
			var dbContext = MockDbContext();

			dbContext.Students.Add(new StudentModel { UserId = 1, Username = "user1", Password = "password1" });
			dbContext.Students.Add(new StudentModel { UserId = 2, Username = "user2", Password = "password2" });
			dbContext.SaveChanges();

			UserController userController = new(dbContext);

			StudentModel newStudent = new()
			{
				UserId = 3,
				Username = "Filip",
				Password = "svagt"
			};

			// Act
			var result = await userController.Post(newStudent);

			// Assert
			Assert.IsNotNull(result);
			Assert.AreEqual(3, dbContext.Students.Count());
		}

		[TestMethod]
		public async Task TestGetFlags()
		{
			// Arrange
			FlagsController flagsController = new();

			// Act
			var result = await flagsController.Get("europe");

			// Assert
			Assert.IsNotNull(result);
			Assert.AreEqual(53, result.Count());
		}
	}
}