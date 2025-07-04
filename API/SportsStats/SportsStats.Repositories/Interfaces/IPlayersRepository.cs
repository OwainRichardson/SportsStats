using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;

namespace SportsStats.Repositories.Interfaces
{
    public interface IPlayersRepository
    {
        Task CreatePlayer(CreatePlayerInputModel model, string userId);
        Task DeletePlayer(Guid playerId, string userId);
        Task EditPlayer(CreatePlayerInputModel model, Guid playerId, string userId);
        Task<Player> GetPlayer(Guid sportId, Guid playerId);
        Task<List<Player>> GetPlayers(Guid sportId);
    }
}
