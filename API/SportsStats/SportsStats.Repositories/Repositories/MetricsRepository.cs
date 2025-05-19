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
                Name = model.Name,
                SportId = model.SportId,
                CreatedDate = DateTime.UtcNow,
                IsScoreModifier = model.IsScoreModifier,
                ScoreModifier = model.ScoreModifier,
                IsTurnover = model.IsTurnover,
                IsActive = true
            };

            await _sportsStatsContext.Metrics.AddAsync(newMetric);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<List<MetricViewModel>> GetMetricsForSport(Guid sportId)
        {
            return await _sportsStatsContext.Metrics
                                .AsNoTracking()
                                .Where(metric => metric.SportId == sportId
                                        && metric.IsActive)
                                .Select(metric => new MetricViewModel
                                {
                                    Id = metric.Id,
                                    SportId = metric.SportId,
                                    Name = metric.Name,
                                    SportName = metric.Sport.Name,
                                    IsScoreModifier = metric.IsScoreModifier,
                                    ScoreModifier = metric.ScoreModifier,
                                    IsTurnover = metric.IsTurnover
                                })
                                .ToListAsync();
        }

        public async Task UpdateMetricForSport(UpdateMetricInputModel model)
        {
            Metric metric = await _sportsStatsContext.Metrics.FirstOrDefaultAsync(metric => metric.Id == model.Id);

            metric.Name = model.Name;
            metric.IsScoreModifier = model.IsScoreModifier;
            metric.ScoreModifier = model.ScoreModifier;
            metric.IsTurnover = model.IsTurnover;
            metric.UpdatedDate = DateTime.UtcNow;

            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task MarkMetricAsInactive(Guid metricId)
        {
            Metric metric = await _sportsStatsContext.Metrics.FirstOrDefaultAsync(metric => metric.Id ==  metricId);

            metric.IsActive = false;

            await _sportsStatsContext.SaveChangesAsync();
        }
    }
}
