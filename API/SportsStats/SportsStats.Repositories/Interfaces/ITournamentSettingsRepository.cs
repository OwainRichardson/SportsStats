using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;

namespace SportsStats.Repositories.Interfaces
{
    public interface ITournamentSettingsRepository
    {
        Task CreateTournamentSetting(CreateTournamentSettingInputModel model, Guid tournamentId);
        Task<List<TournamentSettingDetail>> GetTournamentSettings(Guid sportId, Guid tournamentId);
        Task UpdateTournamentSetting(Guid settingId, UpdateTournamentSettingInputModel model);
    }
}
