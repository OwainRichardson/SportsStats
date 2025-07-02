
using System.Text.Json.Serialization;

namespace SportsStats.Models.InputModels
{
    public class CreateTournamentSettingInputModel
    {
        public string Value { get; set; } = null;
        [JsonIgnore]
        public Guid SportId { get; set; }
        public Guid TournamentId { get; set; }
        public Guid SportSettingId { get; set; }
    }
}
