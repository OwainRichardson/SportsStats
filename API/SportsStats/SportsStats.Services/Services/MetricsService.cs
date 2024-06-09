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

        public async Task CreateMetricValue(Guid metricId, string value)
        {
            await _metricsRepository.CreateMetricValue(metricId, value);
        }

        public async Task<List<MetricViewModel>> GetMetricsForSport(Guid sportId)
        {
            return await _metricsRepository.GetMetricsForSport(sportId);
        }

        public async Task<List<MetricValuesViewModel>> GetMetricValues(Guid metricId)
        {
            return await _metricsRepository.GetMetricValues(metricId);
        }
    }
}
