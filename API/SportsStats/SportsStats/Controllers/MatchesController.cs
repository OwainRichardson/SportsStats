using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.ViewModels;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    public class MatchesController : ControllerBase
    {
        private readonly IMatchRepository _matchRepository;

        public MatchesController(IMatchRepository matchRepository)
        {
            _matchRepository = matchRepository;
        }

        [HttpGet]
        [Route("sports/{sportId}/tournaments/{tournamentId}/matches")]
        [ProducesResponseType(typeof(TournamentViewModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetTournament([FromRoute] Guid tournamentId)
        {
            return Ok(await _matchRepository.GetTournamentMatches(tournamentId));
        }
    }
}