using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class MatchRepository : IMatchRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public MatchRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task<List<Match>> GetTournamentMatches(Guid tournamentId)
        {
            return await _sportsStatsContext.Matches
                                .AsNoTracking()
                                .Where(match => match.TournamentId == tournamentId)
                                .ToListAsync();
        }
    }
}
