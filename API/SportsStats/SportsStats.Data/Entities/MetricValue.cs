namespace SportsStats.Data.Entities
{
    public class MetricValue
    {
        public Guid Id { get; set; }
        public Guid MetricId { get; set; }
        public string Value { get; set; }
    }
}
