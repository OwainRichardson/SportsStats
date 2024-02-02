namespace SportsStats.Models.InputModels
{
    public class CreateSportMetricInputModel
    {
        public Guid SportId { get; set; }
        public string MetricName { get; set; }
    }
}
