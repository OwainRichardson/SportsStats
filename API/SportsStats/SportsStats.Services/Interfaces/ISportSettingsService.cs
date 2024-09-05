using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;

namespace SportsStats.Services.Interfaces
{
    public interface ISportSettingsService
    {
        Task CreateSportSetting(CreateSportSettingInputModel model);
        Task<List<SportSettingDetail>> GetSportSettings(Guid sportId);
    }
}
