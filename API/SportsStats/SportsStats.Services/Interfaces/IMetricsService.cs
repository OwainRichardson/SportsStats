using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;

namespace SportsStats.Services.Interfaces
{
    public interface IMetricsService
    {
        Task CreateMetricForSport(CreateMetricInputModel model);
        Task<List<MetricViewModel>> GetMetricsForSport(Guid sportId);
        Task UpdateMetricForSport(UpdateMetricInputModel model);
    }
}
