using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HelloController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetHello()
        {
            return Ok("Merhaba, API çalışıyor!");
        }
    }
}
