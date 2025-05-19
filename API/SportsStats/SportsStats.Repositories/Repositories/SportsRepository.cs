using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;
using System.Net;

namespace SportsStats.Repositories.Repositories
{
    public class SportsRepository : ISportsRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public SportsRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreateSport(CreateSportInputModel model, string createdByUserId)
        {
            Sport newSport = new Sport
            {
                Id = Guid.NewGuid(),
                Name = model.Name,
                CreatedDate = DateTime.UtcNow,
                Icon = model.Icon,
                CreatedBy = new Guid(createdByUserId)
            };

            _sportsStatsContext.Sports.Add(newSport);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<SportDetails> GetSport(Guid sportId)
        {
            return await _sportsStatsContext.Sports
                                .AsNoTracking()
                                .Select(sport => new SportDetails
                                {
                                    Id = sport.Id,
                                    Name = sport.Name,
                                    Icon = sport.Icon
                                })
                                .FirstOrDefaultAsync(sport => sport.Id == sportId);
        }

        public async Task<List<SportDetails>> GetSports()
        {
            return await _sportsStatsContext.Sports
                                .AsNoTracking()
                                .Where(sport => sport.IsActive)
                                .Select(sport => new SportDetails
                                {
                                    Id = sport.Id,
                                    Name = sport.Name,
                                    Icon = sport.Icon,
                                })
                                .OrderBy(sport => sport.Name)
                                .ToListAsync();
        }
    }
}