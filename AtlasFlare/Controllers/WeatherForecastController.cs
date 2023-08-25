using AtlasFlare.Api;
using AtlasFlare.Models;
using Microsoft.AspNetCore.Mvc;

namespace AtlasFlare.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class WeatherForecastController : ControllerBase
	{
		private static readonly string[] Summaries = new[]
		{
		"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		List<string> names = new()
		{
			"Stefan",
			"Zebbe",
			"Oski",
			"Fille",
			"Las"
		};

		private readonly ILogger<WeatherForecastController> _logger;

		public WeatherForecastController(ILogger<WeatherForecastController> logger)
		{
			_logger = logger;
		}

		[HttpGet]
		public IEnumerable<string> Get()
		{
			return names.ToList();
			//return Enumerable.Range(1, 5).Select(index => new WeatherForecast
			//{
			//    Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
			//    TemperatureC = Random.Shared.Next(-20, 55),
			//    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
			//})
			//.ToArray();
		}
	}
}