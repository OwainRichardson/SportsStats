using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Contexts;
using SportsStats.Data.Entities;
using SportsStats.Models.InputModels;
using SportsStats.Repositories.Interfaces;

namespace SportsStats.Repositories.Repositories
{
    public class TeamRepository : ITeamRepository
    {
        private readonly SportsStatsContext _sportsStatsContext;

        public TeamRepository(SportsStatsContext sportsStatsContext)
        {
            _sportsStatsContext = sportsStatsContext;
        }

        public async Task CreateTeam(CreateTeamInputModel model, string userId)
        {
            Team newTeam = new()
            {
                Id = Guid.NewGuid(),
                Name = model.Name,
                LogoUrl = model.LogoUrl,
                SportId = model.SportId,
                PrimaryColour = model.PrimaryColour,
                SecondaryColour = model.SecondaryColour,
            };

            await _sportsStatsContext.Teams.AddAsync(newTeam);
            await _sportsStatsContext.SaveChangesAsync();
        }

        public async Task<Team> GetTeam(Guid sportId, Guid teamId)
        {
            return await _sportsStatsContext.Teams.FirstOrDefaultAsync(team => team.Id == teamId && team.SportId == sportId);
        }

        public async Task<List<Team>> GetTeams(Guid sportId)
        {
            return await _sportsStatsContext.Teams
                                .AsNoTracking()
                                .Where(team => team.SportId == sportId)
                                .OrderBy(team => team.Name)
                                .ToListAsync(); ;
        }

        public async Task UpdateTeam(CreateTeamInputModel model, string userId)
        {
            Team team = await _sportsStatsContext.Teams.FirstOrDefaultAsync(team => team.Id == model.TeamId);

            team.Name = model.Name;
            team.LogoUrl = model.LogoUrl;
            team.PrimaryColour = model.PrimaryColour;
            team.SecondaryColour = model.SecondaryColour;

            await _sportsStatsContext.SaveChangesAsync();
        }
    }
}
