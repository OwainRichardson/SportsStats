using SportsStats.Models.InputModels;
using SportsStats.Models.ViewModels;

namespace SportsStats.Repositories.Interfaces
{
    public interface ITournamentsRepository
    {
        Task CreateTournamentForSport(CreateTournamentInputModel model);
        Task<TournamentViewModel> GetTournament(Guid tournamentId);
        Task<List<TournamentViewModel>> GetTournaments(Guid sportId);
    }
}
