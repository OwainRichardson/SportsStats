using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Models.ViewModels;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class TournamentsRepository : ITournamentsRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public TournamentsRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreateTournamentForSport(CreateTournamentInputModel model)
        {
            Tournament newTournament = new Tournament
            {
                Id = Guid.NewGuid(),
                Name = model.Name,
                Date = model.Date,
                Location = model.Location,
                SportId = model.SportId,
                CreatedDate = DateTime.UtcNow
            };

            await _sportsStatsContext.Tournaments.AddAsync(newTournament);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<TournamentViewModel> GetTournament(Guid tournamentId)
        {
            return await _sportsStatsContext.Tournaments
                                .Select(tournament => new TournamentViewModel
                                {
                                    Id = tournament.Id,
                                    Name = tournament.Name,
                                    Date = tournament.Date,
                                    Location = tournament.Location,
                                    SportId = tournament.SportId
                                })
                                .FirstOrDefaultAsync(tournament => tournament.Id == tournamentId);
        }

        public async Task<List<TournamentViewModel>> GetTournaments(Guid sportId)
        {
            return await _sportsStatsContext.Tournaments
                                .Where(tournament => tournament.SportId == sportId)
                                .Select(tournament => new TournamentViewModel
                                {
                                    Id = tournament.Id,
                                    Name = tournament.Name,
                                    Date = tournament.Date,
                                    Location = tournament.Location,
                                    SportId = tournament.SportId
                                })
                                .ToListAsync();
        }
    }
}
