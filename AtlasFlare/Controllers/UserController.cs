using AtlasFlare.Data;
using AtlasFlare.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

		[HttpGet("{username}/getId")]
		public async Task<StudentModel?> Get(string username)
		{
			StudentModel? studentModel = await context.Students.FirstOrDefaultAsync(s => s.Username == username);
			if (studentModel != null)
			{
				return studentModel;
			}
			return null;
		}


		[HttpGet("{username}")]
		public async Task<IActionResult> Get(string username, [FromQuery] string password)
		{
			if (username == "admin")
			{
				TeacherModel? teacher = await context.Teachers
					.FirstOrDefaultAsync(t => t.Username == username);
				if (teacher != null)
				{
					if (password == teacher.Password)
					{
						return Ok();
					}
				}
				return BadRequest();
			}
			StudentModel? student = context.Students
				.FirstOrDefault(s => s.Username == username);
			if (student != null)
			{
				if (password == student.Password)
				{
					return Ok();
				}
			}
			return BadRequest();
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

			return BadRequest();
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody] QuizModel quiz)
		{
			if (quiz != null)
			{
				StudentModel? studentToUpdate = await context.Students.Include(s => s.HighScores).FirstOrDefaultAsync(s => s.UserId == id);

				if (studentToUpdate != null)
				{
					if (studentToUpdate.HighScores == null)
					{
						studentToUpdate.HighScores = new List<QuizModel>();
					}

					studentToUpdate.HighScores.Add(quiz);
					await context.SaveChangesAsync();
					return Ok();
				}
			}

			return BadRequest();
		}

        [HttpGet("AllUsers")]
        public async Task<ActionResult<IEnumerable<StudentModel>>> GetAllUsers()
        {
            // Retrieve all users from the database
            List<StudentModel> users = await context.Students.Include(s=>s.HighScores).ToListAsync();

            if (users.Count == 0)
            {
                return NotFound(); // No users found
            }

            // Return the array of users
            return Ok(users);
        }
    }
}
