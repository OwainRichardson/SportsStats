using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsStats.Models.InputModels;
using SportsStats.Models.ViewModels;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    public class TournamentsController : ControllerBase
    {
        private readonly ITournamentsRepository _tournamentsRepository;

        public TournamentsController(ITournamentsRepository tournamentsRepository)
        {
            _tournamentsRepository = tournamentsRepository;
        }

        [HttpGet]
        [Route("sports/{sportId}/tournaments/future")]
        [ProducesResponseType(typeof(List<TournamentViewModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetFuture(Guid sportId)
        {
            IQueryable<TournamentViewModel> tournaments = _tournamentsRepository.GetTournaments(sportId);

            List<TournamentViewModel> futureTournaments = await tournaments
                                                                    .Where(tournaments => tournaments.StartDate.Date > DateTime.UtcNow.Date)
                                                                    .OrderBy(tournament => tournament.StartDate)
                                                                    .ToListAsync();
            
            return Ok(futureTournaments);
        }

        [HttpGet]
        [Route("sports/{sportId}/tournaments/active")]
        [ProducesResponseType(typeof(List<TournamentViewModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetActive(Guid sportId)
        {
            IQueryable<TournamentViewModel> tournaments = _tournamentsRepository.GetTournaments(sportId);

            List<TournamentViewModel> activeTournaments = await tournaments
                                                                    .Where(tournament => DateTime.UtcNow.Date >= tournament.StartDate.Date && DateTime.UtcNow.Date <= tournament.EndDate.Date)
                                                                    .OrderBy(tournament => tournament.StartDate)
                                                                    .ToListAsync();

            return Ok(activeTournaments);
        }

        [HttpGet]
        [Route("sports/{sportId}/tournaments/past")]
        [ProducesResponseType(typeof(List<TournamentViewModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetPast(Guid sportId)
        {
            IQueryable<TournamentViewModel> tournaments = _tournamentsRepository.GetTournaments(sportId);

            List<TournamentViewModel> pastTournaments = await tournaments
                                                                .Where(tournament => tournament.EndDate.Date < DateTime.UtcNow.Date)
                                                                .OrderByDescending(tournament => tournament.EndDate)
                                                                .ToListAsync();

            return Ok(pastTournaments);
        }

        [HttpPost]
        [Route("sports/{sportId}/tournaments")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create([FromRoute] Guid sportId, [FromBody] CreateTournamentInputModel model)
        {
            model.SportId = sportId;

            await _tournamentsRepository.CreateTournamentForSport(model);

            return NoContent();
        }

        [HttpGet]
        [Route("sports/{sportId}/tournaments/{tournamentId}")]
        [ProducesResponseType(typeof(TournamentViewModel), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetTournament([FromRoute] Guid tournamentId)
        {
            return Ok(await _tournamentsRepository.GetTournament(tournamentId));
        }
    }
}