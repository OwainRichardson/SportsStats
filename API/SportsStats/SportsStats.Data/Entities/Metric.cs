using System.ComponentModel.DataAnnotations;

namespace SportsStats.Data.Entities
{
    public class Metric
    {
        [Key]
        public Guid Id { get; set; }
        public Guid SportId { get; set; }
        public Sport Sport { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public Guid? UpdatedBy { get; set; }
        public bool IsScoreModifier { get; set; }
        public int? ScoreModifier { get; set; }
        public bool IsTurnover { get; set; }
    }
}
