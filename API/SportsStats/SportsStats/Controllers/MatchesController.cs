using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
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
        public async Task<IActionResult> GetMatches([FromRoute] Guid tournamentId)
        {
            return Ok(await _matchRepository.GetTournamentMatches(tournamentId));
        }



        [HttpGet]
        [Route("sports/{sportId}/tournaments/{tournamentId}/matches/{matchId}")]
        [ProducesResponseType(typeof(TournamentViewModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetMatch([FromRoute] Guid matchId)
        {
            return Ok(await _matchRepository.GetMatch(matchId));
        }

        [HttpPost]
        [Route("sports/{sportId}/tournaments/{tournamentId}/matches")]
        [ProducesResponseType(typeof(TournamentViewModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> CreateMatch([FromRoute] Guid tournamentId, [FromBody] CreateMatchInputModel model)
        {
            await _matchRepository.CreateMatch(tournamentId, model);

            return NoContent();
        }

        [HttpPut]
        [Route("sports/{sportId}/tournaments/{tournamentId}/matches/{matchId}/complete")]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> CompleteMatch([FromRoute] Guid matchId)
        {
            await _matchRepository.CompleteMatch(matchId);

            return NoContent();
        }

        [HttpPost]
        [Route("sports/{sportId}/tournaments/{tournamentId}/matches/{matchId}/events")]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> AddMatchEvent([FromRoute] Guid matchId, [FromBody] MatchEventInputModel model)
        {
            await _matchRepository.AddMatchEvent(matchId, model);

            return NoContent();
        }
    }
}