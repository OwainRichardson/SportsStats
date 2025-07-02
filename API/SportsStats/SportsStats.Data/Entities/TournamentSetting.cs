using System.ComponentModel.DataAnnotations;

namespace SportsStats.Data.Entities
{
    public class TournamentSetting
    {
        [Key]
        public Guid Id { get; set; }
        public Guid SportSettingId { get; set; }
        public Guid TournamentId { get; set; }
        public string Value { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public Guid? UpdatedBy { get; set; }
    }
}
