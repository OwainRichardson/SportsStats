using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;
using SportsStats.Services.Interfaces;

namespace SportsStats.Services.Services
{
    public class SportsService : ISportsService
    {
        private readonly ISportsRepository _sportsRepository;

        public SportsService(ISportsRepository sportsRepository)
        {
            _sportsRepository = sportsRepository;
        }

        public async Task CreateSport(CreateSportInputModel model)
        {
            await _sportsRepository.CreateSport(model);
        }

        public async Task<List<SportDetails>> GetSports()
        {
            return await _sportsRepository.GetSports();
        }
    }
}
