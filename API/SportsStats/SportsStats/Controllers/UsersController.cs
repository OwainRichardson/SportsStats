using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.User;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        [Authorize]
        [Route("{userId}")]
        public async Task<UserDetails> GetUserDetails([FromRoute] Guid userId)
        {
            return await _userRepository.GetUserDetails(userId);
        }
    }
}