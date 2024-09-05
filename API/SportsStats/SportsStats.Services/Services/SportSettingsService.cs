using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;
using SportsStats.Services.Interfaces;

namespace SportsStats.Services.Services
{
    public class SportSettingsService : ISportSettingsService
    {
        private readonly ISportSettingsRepository _sportSettingsRepository;

        public SportSettingsService(ISportSettingsRepository sportSettingssRepository)
        {
            _sportSettingsRepository = sportSettingssRepository;
        }

        public async Task CreateSportSetting(CreateSportSettingInputModel model)
        {
            await _sportSettingsRepository.CreateSportSetting(model);
        }

        public async Task<List<SportSettingDetail>> GetSportSettings(Guid sportId)
        {
            return await _sportSettingsRepository.GetSportSettings(sportId);
        }
    }
}
