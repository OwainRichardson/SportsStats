namespace SportsStats.Models.InputModels
{
    public class CreateTournamentInputModel
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Location { get; set; }
        public Guid SportId { get; set; }
    }
}
