using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
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
            await _sportsStatsContext.AddAsync(model);
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
    }
}
