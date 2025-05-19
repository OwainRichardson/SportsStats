using System.ComponentModel.DataAnnotations;

namespace SportsStats.Data.Entities
{
    public class Team
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string LogoUrl { get; set; }
        public Guid SportId { get; set; }
    }
}
