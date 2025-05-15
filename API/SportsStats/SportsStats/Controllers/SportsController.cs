using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.Extensions;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class SportsController : ControllerBase
    {
        private readonly ISportsRepository _sportsRepository;

        public SportsController(ISportsRepository sportsRepository)
        {
            _sportsRepository = sportsRepository;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<SportDetails>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            return Ok(await _sportsRepository.GetSports());
        }

        [HttpGet]
        [Route("{sportId}")]
        [ProducesResponseType(typeof(List<SportDetails>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get(Guid sportId)
        {
            return Ok(await _sportsRepository.GetSport(sportId));
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateSportInputModel model)
        {
            await _sportsRepository.CreateSport(model, User.UserId());

            return NoContent();
        }
    }
}
