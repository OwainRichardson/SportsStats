using System.ComponentModel.DataAnnotations;

namespace SportsStats.Data.Entities
{
    public class MatchEvent
    {
        [Key]
        public Guid Id { get; set; }

        public Guid MatchId { get; set; }

        public Guid TeamId { get; set; }

        public Guid MetricId { get; set; }

        // Event time in seconds
        public int Timestamp { get; set; }

        public DateTime CreatedDate { get; set; }

        public Guid CreatedBy { get; set; }
    }
}
