using Microsoft.EntityFrameworkCore;
using SportsStats.Data.Entities;

namespace SportsStats.Data.Contexts
{
    public class SportsStatsContext : DbContext
    {
        public SportsStatsContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Sport>().HasKey(sport => sport.Id);
            modelBuilder.Entity<Metric>().HasKey(metric => metric.Id);
            modelBuilder.Entity<Tournament>().HasKey(tournament => tournament.Id);
            modelBuilder.Entity<SportSetting>().HasKey(setting => setting.Id);
            modelBuilder.Entity<User>().HasKey(user => user.Id);
            modelBuilder.Entity<User>().HasAlternateKey(user => user.Email);
            modelBuilder.Entity<Match>().HasKey(match => match.Id);
            modelBuilder.Entity<Team>().HasKey(team => team.Id);
            modelBuilder.Entity<Match>().HasOne(match => match.HomeTeam).WithMany().OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Match>().HasOne(match => match.AwayTeam).WithMany().OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Player>().HasKey(player => player.Id);
        }

        public DbSet<Sport> Sports { get; set; }
        public DbSet<Metric> Metrics { get; set; }
        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<SportSetting> SportSettings { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<MatchEvent> MatchEvents { get; set; }
        public DbSet<Player> Players { get; set; }
    }
}
