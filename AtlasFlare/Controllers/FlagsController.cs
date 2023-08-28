using AtlasFlare.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AtlasFlare.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class FlagsController : ControllerBase
	{
		//// GET: api/<FlagsController>
		//[HttpGet]
		//public FlagModel? Get()
		//{
		//	return null;
		//}

		// GET api/<FlagsController>/europe
		[HttpGet("{continent}")]
		public async Task<List<FlagModel>?> Get(string continent)
		{
			HttpResponseMessage? response = await new HttpClient()
				.GetAsync($"https://restcountries.com/v3.1/region/{continent}?fields=name,flags");
			var message = await response.Content.ReadAsStringAsync();
			List<ApiModel.Root>? result = JsonConvert.DeserializeObject<List<ApiModel.Root>>(message);

			if (result != null)
			{
				List<FlagModel>? flags = new();
				int id = 1;

				foreach (var country in result)
				{
					flags.Add(new FlagModel()
					{
						FlagId = id,
						CountryName = country.Name.Common,
						ImageUrl = country.Flags.Png
					});
					id++;
				}
				return flags;
			}
			return null;
		}
	}
}
