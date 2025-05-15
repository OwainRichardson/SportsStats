using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsStats.Models.User;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        [Authorize]
        [Route("current")]
        public async Task<UserDetails> GetUserDetails()
        {
            string userId = User.Claims.First(c => c.Type == "UserId").Value;

            return await _userRepository.GetUserDetails(new Guid(userId));
        }
    }
}