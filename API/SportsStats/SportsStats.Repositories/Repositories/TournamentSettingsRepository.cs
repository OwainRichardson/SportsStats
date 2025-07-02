using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.CustomExceptions;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class TournamentSettingsRepository : ITournamentSettingsRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public TournamentSettingsRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreateTournamentSetting(CreateTournamentSettingInputModel model, Guid tournamentId)
        {
            TournamentSetting newTournamentSetting = new TournamentSetting
            {
                CreatedDate = DateTime.UtcNow,
                TournamentId = tournamentId,
                SportSettingId = model.SportSettingId,
                Value = model.Value
            };

            await _sportsStatsContext.TournamentSettings.AddAsync(newTournamentSetting);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<List<TournamentSettingDetail>> GetTournamentSettings(Guid sportId, Guid tournamentId)
        {
            return await _sportsStatsContext.TournamentSettings
                            .AsNoTracking()
                            .Where(setting => setting.TournamentId == tournamentId)
                            .Select(setting => new TournamentSettingDetail
                            {
                                Id = setting.Id,
                                SportSettingId = setting.SportSettingId,
                                TournamentId = setting.TournamentId,
                                Value = setting.Value
                            })
                            .ToListAsync();
        }

        public async Task UpdateTournamentSetting(Guid settingId, UpdateTournamentSettingInputModel model)
        {
            TournamentSetting tournamentSetting = await _sportsStatsContext.TournamentSettings.FirstOrDefaultAsync(setting => setting.SportSettingId == settingId);

            if (tournamentSetting == null)
            {
                throw new EntityNotFoundException($"Cound not find sport setting with id {settingId}");
            }

            tournamentSetting.Value = model.Value ?? tournamentSetting.Value;

            await _sportsStatsContext.SaveChangesAsync();
        }
    }
}
