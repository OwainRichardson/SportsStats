using SportsStats.Models.InputModels;
using SportsStats.Models.ViewModels;
using SportsStats.Repositories.Interfaces;
using SportsStats.Services.Interfaces;

namespace SportsStats.Services.Services
{
    public class TournamentsService : ITournamentsService
    {
        private readonly ITournamentsRepository _tournamentsRepository;

        public TournamentsService(ITournamentsRepository tournamentsRepository)
        {
            _tournamentsRepository = tournamentsRepository;
        }

        public async Task CreateTournamentForSport(CreateTournamentInputModel model)
        {
            await _tournamentsRepository.CreateTournamentForSport(model);
        }

        public async Task<TournamentViewModel> GetTournament(Guid tournamentId)
        {
            return await _tournamentsRepository.GetTournament(tournamentId);
        }

        public async Task<List<TournamentViewModel>> GetTournaments(Guid sportId)
        {
            return await _tournamentsRepository.GetTournaments(sportId);
        }
    }
}
