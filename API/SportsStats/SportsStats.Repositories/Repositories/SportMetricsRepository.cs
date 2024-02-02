using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Models.SportMetric;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class SportMetricsRepository : ISportMetricsRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public SportMetricsRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreateSportMetric(CreateSportMetricInputModel model)
        {
            SportMetric newSportMetric = new SportMetric
            {
                Id = Guid.NewGuid(),
                Name = model.MetricName,
                SportId = model.SportId,
                CreatedDate = DateTime.UtcNow
            };

            _sportsStatsContext.SportMetrics.Add(newSportMetric);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<List<SportMetricDetails>> GetSportMetrics(Guid sportId)
        {
            return await _sportsStatsContext.SportMetrics
                                .Where(metric => metric.SportId == sportId)
                                .Select(metric => new SportMetricDetails
                                {
                                    Id = metric.Id,
                                    SportId = metric.SportId,
                                    Name = metric.Name,
                                    SportName = metric.Sport.Name
                                })
                                .ToListAsync();
        }
    }
}
