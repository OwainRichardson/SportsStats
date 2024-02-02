namespace SportsStats.Models.SportMetric
{
    public class SportMetricDetails
    {
        public Guid Id { get; set; }
        public Guid SportId { get; set; }
        public string SportName { get; set; }
        public string Name { get; set; }
    }
}
