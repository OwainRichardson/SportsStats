namespace SportsStats.Models.InputModels
{
    public class CreateMetricInputModel
    {
        public Guid SportId { get; set; }
        public string Name { get; set; }
        public bool IsScoreModifier { get; set; }
        public int? ScoreModifier { get; set; }
        public bool IsTurnover { get; set; }
    }
}
