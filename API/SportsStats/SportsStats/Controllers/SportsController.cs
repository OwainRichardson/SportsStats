using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SportsController : ControllerBase
    {
        private readonly ILogger<SportsController> _logger;
        private readonly ISportsService _sportsService;

        public SportsController(ILogger<SportsController> logger, ISportsService sportsService)
        {
            _logger = logger;
            _sportsService = sportsService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<SportDetails>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            return Ok(await _sportsService.GetSports());
        }

        [HttpGet]
        [Route("{sportId}")]
        [ProducesResponseType(typeof(List<SportDetails>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(Guid sportId)
        {
            return Ok(await _sportsService.GetSport(sportId));
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateSportInputModel model)
        {
            await _sportsService.CreateSport(model);

            return NoContent();
        }
    }
}
