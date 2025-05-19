using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.Extensions;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Authorize]
    public class TeamsController : ControllerBase
    {
        private readonly ITeamRepository _teamRepository;

        public TeamsController(ITeamRepository teamRepository)
        {
            _teamRepository = teamRepository;
        }

        [HttpGet]
        [Route("sports/{sportId}/teams")]
        [ProducesResponseType(typeof(List<SportDetails>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get([FromRoute] Guid sportId)
        {
            return Ok(await _teamRepository.GetTeams(sportId));
        }

        [HttpPost]
        [Route("sports/{sportId}/teams")]
        public async Task<IActionResult> Create([FromRoute] Guid sportId, [FromBody] CreateTeamInputModel model)
        {
            model.SportId = sportId;

            await _teamRepository.CreateTeam(model, User.UserId());

            return NoContent();
        }
    }
}
