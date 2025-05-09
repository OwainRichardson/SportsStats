using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Models.User;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public UserRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task<User> CreateAccount(UserLoginDetailsInputModel model)
        {
            User newUser = new()
            {
                Id = Guid.NewGuid(),
                Email = model.Email,
                Password = model.PasswordHash
            };
            await _sportsStatsContext.Users.AddAsync(newUser);

            await _sportsStatsContext.SaveChangesAsync();

            return newUser;
        }

        public async Task<UserDetails> GetUserDetails(Guid userId)
        {
            User user = await _sportsStatsContext.Users.FirstOrDefaultAsync(user => user.Id == userId);

            return new UserDetails
            {
                FirstName = user.FirstName,
                LastName = user.LastName
            };
        }

        public async Task<User> Login(UserLoginDetailsInputModel model)
        {
            return await _sportsStatsContext.Users.FirstOrDefaultAsync(user => user.Email.ToLower() == model.Email.ToLower()
                                                                            && user.Password == model.PasswordHash);
        }
    }
}
