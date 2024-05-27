using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class MetricsRepository : IMetricsRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public MetricsRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreateMetricForSport(CreateMetricInputModel model)
        {
            Metric newMetric = new Metric
            {
                Id = Guid.NewGuid(),
                Name = model.MetricName,
                SportId = model.SportId,
                CreatedDate = DateTime.UtcNow
            };

            _sportsStatsContext.Metrics.Add(newMetric);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<List<MetricDetails>> GetMetricsForSport(Guid sportId)
        {
            return await _sportsStatsContext.Metrics
                                .Where(metric => metric.SportId == sportId)
                                .Select(metric => new MetricDetails
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
