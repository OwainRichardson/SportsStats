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
        }

        public DbSet<Sport> Sports { get; set; }
        public DbSet<Metric> Metrics { get; set; }
    }
}
