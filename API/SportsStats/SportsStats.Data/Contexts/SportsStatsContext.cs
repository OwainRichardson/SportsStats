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

            modelBuilder
                .Entity<Sport>()
                .HasKey(sport => sport.Id);

            modelBuilder
                .Entity<Metric>()
                .HasKey(metric => metric.Id);

            modelBuilder
                .Entity<Tournament>()
                .HasKey(tournament => tournament.Id);

            modelBuilder
                .Entity<SportSetting>()
                .HasKey(setting => setting.Id);

            modelBuilder
                .Entity<User>()
                .HasKey(user => user.Id);

            modelBuilder
                .Entity<User>()
                .HasAlternateKey(user => user.Email);
        }

        public DbSet<Sport> Sports { get; set; }
        public DbSet<Metric> Metrics { get; set; }
        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<SportSetting> SportSettings { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
