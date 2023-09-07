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

		//[HttpGet("{id}")]
		//public async Task<StudentModel?> Get(int id)
		//{
		//	StudentModel? studentModel = await context.Students.FirstOrDefaultAsync(s => s.UserId == id);
		//	return studentModel;
		//}


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


        [HttpGet("{userId}/HighScores")]
        public async Task<ActionResult<IEnumerable<QuizModel>>> GetUserHighScores(int userId)
        {
            // Fetch the user by userId
            StudentModel? user = await context.Students
                .Include(u => u.HighScores)
                .FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
            {
                return NotFound(); // User not found
            }

            // Return the user's high scores
            return Ok(user.HighScores);
        }
    }
}
