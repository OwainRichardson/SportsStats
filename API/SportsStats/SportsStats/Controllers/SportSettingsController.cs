using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
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
        [Route("sports/{sportId}/settings")]
        [ProducesResponseType(typeof(List<SportSettingDetail>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(Guid sportId)
        {
            return Ok(await _sportSettingsService.GetSportSettings(sportId));
        }

        [HttpPost]
        [Route("sports/{sportId}/settings")]
        public async Task<IActionResult> Create([FromRoute] Guid sportId, [FromBody] CreateSportSettingInputModel model)
        {
            model.SportId = sportId;

            await _sportSettingsService.CreateSportSetting(model);

            return NoContent();
        }

        [HttpPut]
        [Route("sports/{sportId}/settings/{settingId}")]
        public async Task<IActionResult> Update([FromRoute] Guid settingId, [FromBody] UpdateSportSettingInputModel model)
        {
            await _sportSettingsService.UpdateSportSetting(settingId, model);

            return NoContent();
        }
    }
}
