using Newtonsoft.Json;

namespace AtlasFlare.Models
{
	public class ApiModel
	{
		// Root myDeserializedClass = JsonConvert.DeserializeObject<List<Root>>(myJsonResponse);


		public class Flags
		{
			[JsonProperty("png")]
			public string Png { get; set; }

			[JsonProperty("svg")]
			public string Svg { get; set; }

			[JsonProperty("alt")]
			public string Alt { get; set; }
		}



		public class Name
		{
			[JsonProperty("common")]
			public string Common { get; set; }
		}




		public class Root
		{
			[JsonProperty("flags")]
			public Flags Flags { get; set; }

			[JsonProperty("name")]
			public Name Name { get; set; }

			[JsonProperty("continents")]
			public List<string> Continents { get; set; }
		}


	}
}
