using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AtlasFlare.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class TestController : ControllerBase
	{
		List<string> names = new()
		{
			"Stefan",
			"Zebbe",
			"Oski",
			"Fille",
			"Las"
		};

		// GET: api/<TestController>
		[HttpGet]
		public IEnumerable<string> Get()
		{
			return names.ToList();
		}

		// GET api/<TestController>/5
		[HttpGet("{id}")]
		public string Get(int id)
		{
			return "value";
		}

	}
}
