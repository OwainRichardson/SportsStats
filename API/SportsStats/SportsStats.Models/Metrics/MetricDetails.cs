namespace SportsStats.Models.Metrics
{
    public class MetricDetails
    {
        public Guid Id { get; set; }
        public Guid SportId { get; set; }
        public string SportName { get; set; }
        public string Name { get; set; }
    }
}
