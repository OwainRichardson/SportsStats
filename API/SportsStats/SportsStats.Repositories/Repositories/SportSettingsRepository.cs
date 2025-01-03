using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.CustomExceptions;
using SportsStats.Models.InputModels;
using SportsStats.Models.Sports;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class SportSettingsRepository : ISportSettingsRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public SportSettingsRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreateSportSetting(CreateSportSettingInputModel model)
        {
            SportSetting newSportSetting = new SportSetting
            {
                Name = model.Name,
                CreatedDate = DateTime.UtcNow,
                SportId = model.SportId,
                Value = model.Value
            };

            await _sportsStatsContext.SportSettings.AddAsync(newSportSetting);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<List<SportSettingDetail>> GetSportSettings(Guid sportId)
        {
            return await _sportsStatsContext.SportSettings
                            .AsNoTracking()
                            .Where(setting => setting.SportId == sportId)
                            .Select(setting => new SportSettingDetail
                            {
                                Id = setting.Id,
                                Name = setting.Name,
                                SportId = sportId,
                                Value = setting.Value
                            })
                            .ToListAsync();
        }

        public async Task UpdateSportSetting(Guid settingId, UpdateSportSettingInputModel model)
        {
            SportSetting sportSetting = await _sportsStatsContext.SportSettings.FirstOrDefaultAsync(setting => setting.Id == settingId);

            if (sportSetting == null)
            {
                throw new EntityNotFoundException($"Cound not find sport setting with id {settingId}");
            }

            sportSetting.Name = model.Name ?? sportSetting.Name;
            sportSetting.Value = model.Value ?? sportSetting.Value;

            await _sportsStatsContext.SaveChangesAsync();
        }
    }
}
