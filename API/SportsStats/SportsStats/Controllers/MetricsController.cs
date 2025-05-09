using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Metrics;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    public class MetricsController : ControllerBase
    {
        private readonly IMetricsRepository _metricsRepository;

        public MetricsController(IMetricsRepository metricsRepository)
        {
            _metricsRepository = metricsRepository;
        }

        [HttpGet]
        [Route("sports/{sportId}/metrics")]
        [ProducesResponseType(typeof(List<MetricViewModel>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(Guid sportId)
        {
            return Ok(await _metricsRepository.GetMetricsForSport(sportId));
        }

        [HttpPost]
        [Route("sports/{sportId}/metrics")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Create(CreateMetricInputModel model)
        {
            await _metricsRepository.CreateMetricForSport(model);

            return NoContent();
        }

        [HttpPut]
        [Route("sports/{sportId}/metrics/{metricId}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Update(UpdateMetricInputModel model)
        {
            await _metricsRepository.UpdateMetricForSport(model);

            return NoContent();
        }
    }
}
