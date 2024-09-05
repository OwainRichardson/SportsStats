using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SportSettingsController : ControllerBase
    {
        private readonly ILogger<SportsController> _logger;
        private readonly ISportSettingsService _sportSettingsService;

        public SportSettingsController(ILogger<SportsController> logger, ISportSettingsService sportSettingsService)
        {
            _logger = logger;
            _sportSettingsService = sportSettingsService;
        }

        [HttpGet]
        [Route("{sportId}/settings")]
        [ProducesResponseType(typeof(List<SportDetails>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(Guid sportId)
        {
            return Ok(await _sportSettingsService.GetSportSettings(sportId));
        }

        [HttpPost]
        [Route("{sportId}/settings")]
        public async Task<IActionResult> Create(CreateSportSettingInputModel model)
        {
            await _sportSettingsService.CreateSportSetting(model);

            return NoContent();
        }
    }
}
