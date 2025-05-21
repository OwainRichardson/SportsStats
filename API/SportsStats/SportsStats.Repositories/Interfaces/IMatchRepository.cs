using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;

namespace SportsStats.Repositories.Interfaces
{
    public interface IMatchRepository
    {
        Task CreateMatch(Guid tournamentId, CreateMatchInputModel model);
        Task<Match> GetMatch(Guid matchId);
        Task<List<Match>> GetTournamentMatches(Guid tournamentId);
    }
}
