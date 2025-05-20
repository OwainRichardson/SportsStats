namespace SportsStats.Models.InputModels
{
    public class CreateMatchInputModel
    {
        public Guid HomeTeamId { get; set; }
        public Guid AwayTeamId { get; set; }
        public string Pitch { get; set; }
        public DateTime Time { get; set; }
    }
}
