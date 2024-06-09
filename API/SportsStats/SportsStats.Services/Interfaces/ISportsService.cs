using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;

namespace SportsStats.Services.Interfaces
{
    public interface ISportsService
    {
        Task CreateSport(CreateSportInputModel model);
        Task<SportDetails> GetSport(Guid sportId);
        Task<List<SportDetails>> GetSports();
    }
}
