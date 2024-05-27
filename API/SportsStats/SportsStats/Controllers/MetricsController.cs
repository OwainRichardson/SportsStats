using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MetricsController : ControllerBase
    {
        private readonly ILogger<MetricsController> _logger;
        private readonly IMetricsService _sportsService;

        public MetricsController(ILogger<MetricsController> logger, IMetricsService sportsService)
        {
            _logger = logger;
            _sportsService = sportsService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<MetricDetails>), 200)]
        public async Task<List<MetricDetails>> Get(Guid sportId)
        {
            return await _sportsService.GetMetricsForSport(sportId);
        }

        [HttpPost]
        public async Task Create(CreateMetricInputModel model)
        {
            await _sportsService.CreateMetricForSport(model);
        }
    }
}
