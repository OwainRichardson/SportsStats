using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;

namespace SportsStats.Repositories.Interfaces
{
    public interface ITeamRepository
    {
        Task CreateTeam(CreateTeamInputModel model, string userId);
        Task<List<Team>> GetTeams(Guid sportId);
    }
}
