using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class PlayersRepository : IPlayersRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public PlayersRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreatePlayer(CreatePlayerInputModel model, string userId)
        {
            Player existingPlayer = await _sportsStatsContext.Players.FirstOrDefaultAsync(player => player.Email.ToLower() == model.Email.ToLower()); 

            Player newPlayer = new()
            {
                Id = Guid.NewGuid(),
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                CreatedDate = DateTime.UtcNow,
                SportId = model.SportId
            };

            await _sportsStatsContext.Players.AddAsync(newPlayer);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task DeletePlayer(Guid playerId, string userId)
        {
            Player existingPlayer = await _sportsStatsContext.Players.FirstOrDefaultAsync(player => player.Id == playerId);
            existingPlayer.IsActive = false;

            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task EditPlayer(CreatePlayerInputModel model, Guid playerId, string userId)
        {
            Player existingPlayer = await _sportsStatsContext.Players.FirstOrDefaultAsync(player => player.Email.ToLower() == model.Email.ToLower());
            existingPlayer.FirstName = model.FirstName;
            existingPlayer.LastName = model.LastName;
            existingPlayer.UpdateDate = DateTime.UtcNow;

            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<Player> GetPlayer(Guid sportId, Guid playerId)
        {
            return await _sportsStatsContext.Players.FirstOrDefaultAsync(player => player.Id == playerId && player.SportId == sportId);
        }

        public async Task<List<Player>> GetPlayers(Guid sportId)
        {
            return await _sportsStatsContext.Players
                                .Where(player => player.SportId == sportId)
                                .ToListAsync();
        }
    }
}
