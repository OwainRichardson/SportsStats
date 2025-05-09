using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Models.User;

namespace SportsStats.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<User> CreateAccount(UserLoginDetailsInputModel model);
        Task<UserDetails> GetUserDetails(Guid userId);
        Task<User> Login(UserLoginDetailsInputModel model);
    }
}
