using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class SportsRepository : ISportsRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public SportsRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreateSport(CreateSportInputModel model)
        {
            Sport newSport = new Sport
            {
                Id = Guid.NewGuid(),
                Name = model.Name,
                CreatedDate = DateTime.UtcNow
            };

            _sportsStatsContext.Sports.Add(newSport);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<List<SportDetails>> GetSports()
        {
            return await _sportsStatsContext.Sports
                                .Select(sport => new SportDetails
                                {
                                    Id = sport.Id,
                                    Name = sport.Name
                                })
                                .ToListAsync();
        }
    }
}
