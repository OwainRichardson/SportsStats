using SportsStats.Models.InputModels;
using SportsStats.Models.SportMetric;
using SportsStats.Repositories.Interfaces;
using SportsStats.Services.Interfaces;

namespace SportsStats.Services.Services
{
    public class SportMetricsService : ISportMetricsService
    {
        private readonly ISportMetricsRepository _sportMetricsRepository;

        public SportMetricsService(ISportMetricsRepository sportMetricsRepository)
        {
            _sportMetricsRepository = sportMetricsRepository;
        }

        public async Task CreateSportMetric(CreateSportMetricInputModel model)
        {
            await _sportMetricsRepository.CreateSportMetric(model);
        }

        public async Task<List<SportMetricDetails>> GetSportMetrics(Guid sportId)
        {
            return await _sportMetricsRepository.GetSportMetrics(sportId);
        }
    }
}
