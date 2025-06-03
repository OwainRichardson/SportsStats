using System.ComponentModel.DataAnnotations;

namespace SportsStats.Data.Entities
{
    public class Match
    {
        [Key]
        public Guid Id { get; set; }
        public Guid TournamentId { get; set; }
        public Tournament Tournament { get; set; }
        public Guid HomeTeamId { get; set; }
        public Team HomeTeam { get; set; }
        public Guid AwayTeamId { get; set; }
        public Team AwayTeam { get; set; }
        public DateTime Time { get; set; }
        public string Pitch { get; set; }
        public bool IsComplete { get; set; }
        public int HomeTeamScore { get; set; }
        public int AwayTeamScore { get; set; }
    }
}
