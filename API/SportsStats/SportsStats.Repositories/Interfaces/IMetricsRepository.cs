using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;

namespace SportsStats.Repositories.Interfaces
{
    public interface IMetricsRepository
    {
        Task CreateMetricForSport(CreateMetricInputModel model);
        Task<List<MetricViewModel>> GetMetricsForSport(Guid sportId);
        Task UpdateMetricForSport(UpdateMetricInputModel model);
        Task MarkMetricAsInactive(Guid metricId);
    }
}
