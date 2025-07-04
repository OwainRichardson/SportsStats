using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    public class TournamentSettingsController : ControllerBase
    {
        private readonly ITournamentSettingsRepository _tournamentSettingsRepository;

        public TournamentSettingsController(ITournamentSettingsRepository tournamentSettingsRepository)
        {
            _tournamentSettingsRepository = tournamentSettingsRepository;
        }

        [HttpGet]
        [Route("sports/{sportId}/tournaments/{tournamentId}/settings")]
        [ProducesResponseType(typeof(List<TournamentSettingDetail>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get([FromRoute] Guid sportId, [FromRoute] Guid tournamentId)
        {
            return Ok(await _tournamentSettingsRepository.GetTournamentSettings(sportId, tournamentId));
        }

        [HttpPost]
        [Route("sports/{sportId}/tournaments/{tournamentId}/settings")]
        public async Task<IActionResult> Create([FromRoute] Guid tournamentId, [FromBody] CreateTournamentSettingInputModel model)
        {
            await _tournamentSettingsRepository.CreateTournamentSetting(model, tournamentId);

            return NoContent();
        }

        [HttpPut]
        [Route("sports/{sportId}/tournaments/{tournamentId}/settings/{settingId}")]
        public async Task<IActionResult> Update([FromRoute] Guid settingId, [FromBody] UpdateTournamentSettingInputModel model)
        {
            await _tournamentSettingsRepository.UpdateTournamentSetting(settingId, model);

            return NoContent();
        }

        [HttpDelete]
        [Route("sports/{sportId}/tournaments/{tournamentId}/settings/{settingId}")]
        public async Task<IActionResult> Delete([FromRoute] Guid settingId, [FromRoute] Guid tournamentId)
        {
            await _tournamentSettingsRepository.DeleteTournamentSetting(settingId, tournamentId);

            return NoContent();
        }
    }
}
