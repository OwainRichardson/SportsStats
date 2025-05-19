using SportsStats.Data.Entities;

namespace SportsStats.Repositories.Interfaces
{
    public interface IMatchRepository
    {
        Task<List<Match>> GetTournamentMatches(Guid tournamentId);
    }
}
