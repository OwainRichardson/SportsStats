using System.Text.Json.Serialization;

namespace SportsStats.Models.InputModels
{
    public class UpdateTournamentSettingInputModel
    {
        public string Name { get; set; }
        public string Value { get; set; } = null;
        [JsonIgnore]
        public Guid SportId { get; set; }
        public Guid TournamentId { get; set; }
    }
}
