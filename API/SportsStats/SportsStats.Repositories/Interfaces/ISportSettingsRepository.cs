using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;

namespace SportsStats.Repositories.Interfaces
{
    public interface ISportSettingsRepository
    {
        Task CreateSportSetting(CreateSportSettingInputModel model);
        Task<List<SportSettingDetail>> GetSportSettings(Guid sportId);
        Task UpdateSportSetting(Guid settingId, UpdateSportSettingInputModel model);
    }
}
