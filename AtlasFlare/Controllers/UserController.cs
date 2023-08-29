using AtlasFlare.Data;
using AtlasFlare.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text.Json;

namespace AtlasFlare.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		public AppDbContext context { get; }

		public UserController(AppDbContext context)
		{
			this.context = context;
		}

		[HttpGet("{id}")]
		public StudentModel Get(int id)
		{
			StudentModel? student = context.Students.FirstOrDefault(s => s.UserId == id);
			return student;
		}

		// Sign in user
		//[HttpGet("{username}")]
		//public async Task<bool> Get(string username, [FromQuery] string password, [FromQuery] string userType)
		//{
		//	UserModel? userToLogin = new();
		//	if (userType == "teacher")
		//	{
		//		userToLogin = await context.Teachers.FirstOrDefaultAsync(s => s.Username == username);

		//		if (userToLogin != null)
		//		{
		//			if (userToLogin.Password == password)
		//			{
		//				return true;
		//			}
		//		}
		//		return false;
		//	}
		//	else
		//	{
		//		userToLogin = await context.Students.FirstOrDefaultAsync(s => s.Username == username);

		//		if (userToLogin != null)
		//		{
		//			if (userToLogin.Password == password)
		//			{
		//				return true;
		//			}
		//		}
		//		return false;
		//	}
		//}

		// Create new user
		[HttpPost]
		public async Task<IActionResult> Post([FromBody] StudentModel newUser)
		{
            if (newUser != null)
			{
                var existingStudent = await context.Students.Where(s => s.Username == newUser.Username).FirstOrDefaultAsync();

                if (existingStudent == null)
                {
                    await context.Students.AddAsync(newUser);
                    await context.SaveChangesAsync();

                    return Ok();
                }
            }

            return BadRequest("Wrong data...");
        }
	}
}
