using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
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

        public async Task CompleteMatch(Guid matchId)
        {
            Match match = await _sportsStatsContext.Matches.FirstOrDefaultAsync(match => match.Id == matchId);

            if (match == null)
            {
                throw new KeyNotFoundException();
            }

            match.IsComplete = true;
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task CreateMatch(Guid tournamentId, CreateMatchInputModel model)
        {
            Match match = new()
            {
                Id = Guid.NewGuid(),
                TournamentId = tournamentId,
                AwayTeamId = model.AwayTeamId,
                HomeTeamId = model.HomeTeamId,
                Pitch = model.Pitch,
                Time = model.Time
            };

            await _sportsStatsContext.AddAsync(match);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<Match> GetMatch(Guid matchId)
        {
            return await _sportsStatsContext.Matches
                                .Include(match => match.HomeTeam)
                                .Include(match => match.AwayTeam)
                                .AsNoTracking()
                                .FirstOrDefaultAsync(match => match.Id == matchId);
        }

        public async Task<List<Match>> GetTournamentMatches(Guid tournamentId)
        {
            return await _sportsStatsContext.Matches
                                .Include(match => match.HomeTeam)
                                .Include(match => match.AwayTeam)
                                .AsNoTracking()
                                .Where(match => match.TournamentId == tournamentId)
                                .OrderBy(match => match.Time)
                                .ToListAsync();
        }
    }
}
