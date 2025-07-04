using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    public class SportSettingsController : ControllerBase
    {
        private readonly ILogger<SportSettingsController> _logger;
        private readonly ISportSettingsRepository _sportSettingsRepository;

        public SportSettingsController(ILogger<SportSettingsController> logger, ISportSettingsRepository sportSettingsRepository)
        {
            _logger = logger;
            _sportSettingsRepository = sportSettingsRepository;
        }

        [HttpGet]
        [Route("sports/{sportId}/settings")]
        [ProducesResponseType(typeof(List<SportSettingDetail>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(Guid sportId)
        {
            return Ok(await _sportSettingsRepository.GetSportSettings(sportId));
        }

        [HttpPost]
        [Route("sports/{sportId}/settings")]
        public async Task<IActionResult> Create([FromRoute] Guid sportId, [FromBody] CreateSportSettingInputModel model)
        {
            model.SportId = sportId;

            await _sportSettingsRepository.CreateSportSetting(model);

            return NoContent();
        }

        [HttpPut]
        [Route("sports/{sportId}/settings/{settingId}")]
        public async Task<IActionResult> Update([FromRoute] Guid settingId, [FromBody] UpdateSportSettingInputModel model)
        {
            await _sportSettingsRepository.UpdateSportSetting(settingId, model);

            return NoContent();
        }
    }
}
