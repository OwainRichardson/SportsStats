using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;
using SportsStats.Repositories.Interfaces;
using SportsStats.Services.Interfaces;

namespace SportsStats.Services.Services
{
    public class MetricsService : IMetricsService
    {
        private readonly IMetricsRepository _metricsRepository;

        public MetricsService(IMetricsRepository metricsRepository)
        {
            _metricsRepository = metricsRepository;
        }

        public async Task CreateMetricForSport(CreateMetricInputModel model)
        {
            await _metricsRepository.CreateMetricForSport(model);
        }

        public async Task<List<MetricDetails>> GetMetricsForSport(Guid sportId)
        {
            return await _metricsRepository.GetMetricsForSport(sportId);
        }
    }
}
