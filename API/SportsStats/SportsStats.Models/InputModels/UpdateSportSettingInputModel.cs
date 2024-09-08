using System.Text.Json.Serialization;

namespace SportsStats.Models.InputModels
{
    public class UpdateSportSettingInputModel
    {
        public string Name { get; set; }
        public string Value { get; set; } = null;
        [JsonIgnore]
        public Guid SportId { get; set; }
    }
}
