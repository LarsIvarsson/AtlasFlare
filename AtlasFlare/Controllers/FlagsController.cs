using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AtlasFlare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlagsController : ControllerBase
    {
        // GET: api/<FlagsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<FlagsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<FlagsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<FlagsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FlagsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
