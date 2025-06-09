namespace SportsStats.Models.InputModels
{
    public class MatchEventInputModel
    {
        public Guid TeamId { get; set; }
        
        public Guid MetricId { get; set; }

        public int Timestamp { get; set; }
    }
}
