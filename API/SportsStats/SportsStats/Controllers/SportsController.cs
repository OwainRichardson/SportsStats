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

        [HttpGet(Name = "GetSports")]
        [ProducesResponseType(typeof(List<SportDetails>), 200)]
        public async Task<List<SportDetails>> Get()
        {
            return await _sportsService.GetSports();
        }

        [HttpPost(Name = "CreateSport")]
        public async Task Create(CreateSportInputModel model)
        {
            await _sportsService.CreateSport(model);
        }
    }
}
