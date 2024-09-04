namespace SportsStats.Models.Metrics
{
    public class MetricViewModel
    {
        public Guid Id { get; set; }
        public Guid SportId { get; set; }
        public string SportName { get; set; }
        public string Name { get; set; }
        public bool IsScoreModifier { get; set; }
        public int? ScoreModifier { get; set; }
        public bool IsTurnover { get; set; }
    }
}
