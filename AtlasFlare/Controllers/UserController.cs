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
