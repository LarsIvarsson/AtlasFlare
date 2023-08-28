using AtlasFlare.Models;
using Newtonsoft.Json;

namespace AtlasFlare.Api
{
	public class ApiCaller
	{
		public static HttpClient HttpClient { get; set; } = new();

		public async Task<List<ApiModel.Root>?> MakeCall()
		{
			var client = await HttpClient.GetAsync("https://restcountries.com/v3.1/all?fields=name,flags,continents");

			// https://restcountries.com/v3.1/region/europe?fields=name,flags

			var response = await client.Content.ReadAsStringAsync();

			List<ApiModel.Root>? result = JsonConvert.DeserializeObject<List<ApiModel.Root>>(response);

			if (result != null)
			{
				return result;

			}

			return null;
		}

	}
}
