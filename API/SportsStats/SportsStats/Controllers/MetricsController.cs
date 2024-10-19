using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    public class MetricsController : ControllerBase
    {
        private readonly IMetricsService _metricsService;

        public MetricsController(IMetricsService metricsService)
        {
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

        [HttpPut]
        [Route("sports/{sportId}/metrics/{metricId}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Update(UpdateMetricInputModel model)
        {
            await _metricsService.UpdateMetricForSport(model);

            return NoContent();
        }
    }
}
