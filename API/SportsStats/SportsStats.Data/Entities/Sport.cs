using System.ComponentModel.DataAnnotations;

namespace SportsStats.Data.Entities
{
    public class Sport
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public Guid? UpdatedBy { get; set; }
        public string Icon { get; set; }
    }
}
