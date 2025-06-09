using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsStats.Data.Entities;
using SportsStats.Models.Extensions;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class PlayersController : ControllerBase
    {
        private readonly IPlayersRepository _playersRepository;

        public PlayersController(IPlayersRepository playersRepository)
        {
            _playersRepository = playersRepository;
        }

        [HttpGet]
        [Route("{sportId}")]
        [ProducesResponseType(typeof(List<Player>), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get([FromRoute] Guid sportId)
        {
            return Ok(await _playersRepository.GetPlayers(sportId));
        }

        [HttpGet]
        [Route("{sportId}/players/{playerId}")]
        [ProducesResponseType(typeof(Player), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get([FromRoute] Guid sportId, [FromRoute] Guid playerId)
        {
            return Ok(await _playersRepository.GetPlayer(sportId, playerId));
        }

        [HttpPost]
        [Route("{sportId}/players")]
        public async Task<IActionResult> Create(CreatePlayerInputModel model)
        {
            await _playersRepository.CreatePlayer(model, User.UserId());

            return NoContent();
        }

        [HttpPut]
        [Route("{sportId}/players/{playerId}")]
        public async Task<IActionResult> Edit([FromRoute] Guid playerId, CreatePlayerInputModel model)
        {
            await _playersRepository.EditPlayer(model, playerId, User.UserId());

            return NoContent();
        }

        [HttpDelete]
        [Route("{sportId}/players/{playerId}")]
        public async Task<IActionResult> Delete([FromRoute] Guid playerId)
        {
            await _playersRepository.DeletePlayer(playerId, User.UserId());

            return NoContent();
        }
    }
}
