using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Services.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SportsController : ControllerBase
    {
        private readonly ILogger<SportsController> _logger;
        private readonly ISportsService _sportsService;

        public SportsController(ILogger<SportsController> logger, ISportsService sportsService)
        {
            _logger = logger;
            _sportsService = sportsService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<SportDetails>), 200)]
        public async Task<List<SportDetails>> Get()
        {
            return await _sportsService.GetSports();
        }

        [HttpPost]
        public async Task Create(CreateSportInputModel model)
        {
            await _sportsService.CreateSport(model);
        }
    }
}
