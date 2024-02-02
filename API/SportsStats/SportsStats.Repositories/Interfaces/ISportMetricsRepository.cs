using SportsStats.Models.InputModels;
using SportsStats.Models.SportMetric;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsStats.Repositories.Interfaces
{
    public interface ISportMetricsRepository
    {
        Task CreateSportMetric(CreateSportMetricInputModel model);
        Task<List<SportMetricDetails>> GetSportMetrics(Guid sportId);
    }
}
