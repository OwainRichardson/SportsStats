﻿using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;

namespace SportsStats.Repositories.Interfaces
{
    public interface IMetricsRepository
    {
        Task CreateMetricForSport(CreateMetricInputModel model);
        Task CreateMetricValue(Guid metricId, string value);
        Task<List<MetricViewModel>> GetMetricsForSport(Guid sportId);
        Task<List<MetricValuesViewModel>> GetMetricValues(Guid metricId);
    }
}
