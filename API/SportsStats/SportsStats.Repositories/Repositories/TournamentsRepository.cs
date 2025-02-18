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
                StartDate = model.StartDate,
                EndDate = model.EndDate,
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
                                .AsNoTracking()
                                .Select(tournament => new TournamentViewModel
                                {
                                    Id = tournament.Id,
                                    Name = tournament.Name,
                                    StartDate = tournament.StartDate,
                                    EndDate = tournament.EndDate,
                                    Location = tournament.Location,
                                    SportId = tournament.SportId
                                })
                                .FirstOrDefaultAsync(tournament => tournament.Id == tournamentId);
        }

        public IQueryable<TournamentViewModel> GetTournaments(Guid sportId)
        {
            return _sportsStatsContext.Tournaments
                                .AsNoTracking()
                                .Where(tournament => tournament.SportId == sportId)
                                .Select(tournament => new TournamentViewModel
                                {
                                    Id = tournament.Id,
                                    Name = tournament.Name,
                                    Location = tournament.Location,
                                    SportId = tournament.SportId,
                                    StartDate = tournament.StartDate,
                                    EndDate = tournament.EndDate
                                })
                                .AsQueryable();
        }
    }
}
