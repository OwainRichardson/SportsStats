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

            await _sportsStatsContext.Metrics.AddAsync(newMetric);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task CreateMetricValue(Guid metricId, string value)
        {
            MetricValue newMetricValue = new MetricValue
            {
                Id = Guid.NewGuid(),
                MetricId = metricId,
                Value = value
            };

            await _sportsStatsContext.MetricValues.AddAsync(newMetricValue);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<List<MetricViewModel>> GetMetricsForSport(Guid sportId)
        {
            return await _sportsStatsContext.Metrics
                                .Where(metric => metric.SportId == sportId)
                                .Select(metric => new MetricViewModel
                                {
                                    Id = metric.Id,
                                    SportId = metric.SportId,
                                    Name = metric.Name,
                                    SportName = metric.Sport.Name
                                })
                                .ToListAsync();
        }

        public async Task<List<MetricValuesViewModel>> GetMetricValues(Guid metricId)
        {
            return await _sportsStatsContext.MetricValues
                                .Where(value => value.MetricId == metricId)
                                .Select(value => new MetricValuesViewModel
                                {
                                    Id = value.Id,
                                    MetricId = metricId,
                                    Value = value.Value
                                })
                                .ToListAsync();
        }
    }
}
