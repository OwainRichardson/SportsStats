using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.SportMetric;
using SportsStats.Models.Sports;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SportMetricsController : ControllerBase
    {
        private readonly ILogger<SportMetricsController> _logger;
        private readonly ISportMetricsService _sportsService;

        public SportMetricsController(ILogger<SportMetricsController> logger, ISportMetricsService sportsService)
        {
            _logger = logger;
            _sportsService = sportsService;
        }

        [HttpGet(Name = "GetSportMetrics")]
        [ProducesResponseType(typeof(List<SportMetricDetails>), 200)]
        public async Task<List<SportMetricDetails>> Get(Guid sportId)
        {
            return await _sportsService.GetSportMetrics(sportId);
        }

        [HttpPost(Name = "CreateSportMetric")]
        public async Task Create(CreateSportMetricInputModel model)
        {
            await _sportsService.CreateSportMetric(model);
        }
    }
}
