using SportsStats.Models.InputModels;
using SportsStats.Models.SportMetric;

namespace SportsStats.Services.Interfaces
{
    public interface ISportMetricsService
    {
        Task CreateSportMetric(CreateSportMetricInputModel model);
        Task<List<SportMetricDetails>> GetSportMetrics(Guid sportId);
    }
}
