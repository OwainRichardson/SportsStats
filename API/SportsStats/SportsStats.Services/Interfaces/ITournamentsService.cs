using SportsStats.Models.InputModels;
using SportsStats.Models.ViewModels;

namespace SportsStats.Services.Interfaces
{
    public interface ITournamentsService
    {
        Task CreateTournamentForSport(CreateTournamentInputModel model);
        Task<TournamentViewModel> GetTournament(Guid tournamentId);
        Task<List<TournamentViewModel>> GetTournaments(Guid sportId);
    }
}
