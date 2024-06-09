using Microsoft.AspNetCore.Mvc;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;
using SportsStats.Models.ViewModels;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    public class TournamentsController : ControllerBase
    {
        private readonly ILogger<TournamentsController> _logger;
        private readonly ITournamentsService _tournamentsService;

        public TournamentsController(ILogger<TournamentsController> logger, ITournamentsService tournamentsService)
        {
            _logger = logger;
            _tournamentsService = tournamentsService;
        }

        [HttpGet]
        [Route("sports/{sportId}/tournaments")]
        [ProducesResponseType(typeof(List<TournamentViewModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(Guid sportId)
        {
            return Ok(await _tournamentsService.GetTournaments(sportId));
        }

        [HttpPost]
        [Route("sports/{sportId}/tournaments")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create(CreateTournamentInputModel model)
        {
            await _tournamentsService.CreateTournamentForSport(model);

            return NoContent();
        }

        [HttpGet]
        [Route("sports/{sportId}/tournaments/{tournamentId}")]
        [ProducesResponseType(typeof(TournamentViewModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetTournament([FromRoute] Guid tournamentId)
        {
            return Ok(await _tournamentsService.GetTournament(tournamentId));
        }
    }
}