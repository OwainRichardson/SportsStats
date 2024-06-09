using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    public class MetricsController : ControllerBase
    {
        private readonly ILogger<MetricsController> _logger;
        private readonly IMetricsService _metricsService;

        public MetricsController(ILogger<MetricsController> logger, IMetricsService metricsService)
        {
            _logger = logger;
            _metricsService = metricsService;
        }

        [HttpGet]
        [Route("sports/{sportId}/metrics")]
        [ProducesResponseType(typeof(List<MetricViewModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(Guid sportId)
        {
            return Ok(await _metricsService.GetMetricsForSport(sportId));
        }

        [HttpPost]
        [Route("sports/{sportId}/metrics")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create(CreateMetricInputModel model)
        {
            await _metricsService.CreateMetricForSport(model);

            return NoContent();
        }

        [HttpGet]
        [Route("sports/{sportId}/metrics/{metricId}/values")]
        [ProducesResponseType(typeof(List<MetricValuesViewModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetMetricValues([FromRoute] Guid metricId)
        {
            return Ok(await _metricsService.GetMetricValues(metricId));
        }

        [HttpPost]
        [Route("sports/{sportId}/metrics/{metricId}/values/{value}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> CreateMetricValue([FromRoute] Guid metricId, [FromRoute] string value)
        {
            await _metricsService.CreateMetricValue(metricId, value);

            return NoContent();
        }
    }
}
