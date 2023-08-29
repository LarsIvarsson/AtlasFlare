using Microsoft.AspNetCore.Mvc;

namespace AtlasFlare.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class TestController : ControllerBase
	{
		// GET: api/<TestController>
		[HttpGet]
		public async Task<List<Todo>?> Get()
		{
			Root? root = await new HttpClient()
				.GetFromJsonAsync<Root>("https://dummyjson.com/todos");
			if (root != null)
				return root.todos;
			else
				return null;
		}

		// GET api/<TestController>/5
		[HttpGet("{id}")]
		public async Task<Todo?> Get(int id)
		{
			Todo? todo = await new HttpClient()
				.GetFromJsonAsync<Todo>($"https://dummyjson.com/todos/{id}");
			return todo;
		}

		public class Root
		{
			public List<Todo> todos { get; set; }
		}

		public class Todo
		{
			public int id { get; set; }
			public string todo { get; set; } = null!;
		}


		//public async Task<Todo?> Get()
		//{
		//	Uri baseAdress = new("https://dummyjson.com/todos/1");
		//	HttpResponseMessage response = await new HttpClient().GetAsync(baseAdress);

		//	if (response.IsSuccessStatusCode)
		//	{
		//		string? responseString = await response.Content.ReadAsStringAsync();
		//		Todo? todo = JsonConvert.DeserializeObject<Todo>(responseString);
		//		// List<Todo>? todos = JsonConvert.DeserializeObject<List<Todo>>(responseString);
		//		return todo;
		//	}
		//	return null;
		//}
	}
}
