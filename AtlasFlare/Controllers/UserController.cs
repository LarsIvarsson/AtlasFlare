using AtlasFlare.Data;
using AtlasFlare.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

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
			StudentModel student = context.Students.FirstOrDefault(s => s.UserId == id);
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
		public async Task<IActionResult> Post([FromBody] string jsonUser)

		{
            StudentModel? newStudent = JsonConvert.DeserializeObject<StudentModel>(jsonUser);
            var existingStudent = await context.Students.Where(s => s.Username == newStudent.Username).FirstOrDefaultAsync();

                if (existingStudent == null)
                {
                    await context.Students.AddAsync(newStudent);
					await context.SaveChangesAsync();

                    return Ok(newStudent);
                }
            }

			return BadRequest();

//         try
			//{
			//	await context.Students.AddAsync(new StudentModel()
			//	{
			//		//Username = username,
			//		//Password = password
					
			//	});
			//	await context.SaveChangesAsync();
			//	return Ok();
			//}
			//catch
			//{
			//	return BadRequest();
			//}
		}
	}
}
