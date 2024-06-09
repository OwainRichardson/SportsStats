using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;

namespace SportsStats.Repositories.Interfaces
{
    public interface ISportsRepository
    {
        Task CreateSport(CreateSportInputModel model);
        Task<SportDetails> GetSport(Guid sportId);
        Task<List<SportDetails>> GetSports();
    }
}
