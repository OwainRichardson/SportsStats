using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;

namespace SportsStats.Services.Interfaces
{
    public interface IMetricsService
    {
        Task CreateMetricForSport(CreateMetricInputModel model);
        Task<List<MetricDetails>> GetMetricsForSport(Guid sportId);
    }
}
