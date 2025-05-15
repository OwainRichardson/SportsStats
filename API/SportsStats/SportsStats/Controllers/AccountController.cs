using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SportsStats.Data.Entities;
using SportsStats.Models.Constants;
using SportsStats.Models.InputModels;
using SportsStats.Models.ViewModels;
using SportsStats.Repositories.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SportsStats.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public AccountController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDetailsInputModel model)
        {
            User user = await _userRepository.Login(model);
            string token = GenerateJwtToken(user);

            return Ok(new LoginResponse { AccessToken = token });
        }

        [HttpPost]
        [Route("CreateAccount")]
        public async Task<IActionResult> CreateAccount([FromBody] CreateUserInputModel model)
        {
            User user = await _userRepository.CreateAccount(model);
            string token = GenerateJwtToken(user);

            return Ok(new LoginResponse { AccessToken = token });
        }

        private static string GenerateJwtToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration.Key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                new Claim("UserId", user.Id.ToString())
            };

            var tokenDetails = new JwtSecurityToken(
                issuer: Configuration.Issuer,
                audience: Configuration.Audience,
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials
            );

            string token = new JwtSecurityTokenHandler().WriteToken(tokenDetails);
            return token;
        }
    }
}
