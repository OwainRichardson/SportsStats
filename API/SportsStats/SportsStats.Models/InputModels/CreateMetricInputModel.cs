namespace SportsStats.Models.InputModels
{
    public class CreateMetricInputModel
    {
        public Guid SportId { get; set; }
        public string MetricName { get; set; }
    }
}
