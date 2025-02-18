namespace SportsStats.Models.InputModels
{
    public class CreateTournamentInputModel
    {
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Location { get; set; }
        public Guid SportId { get; set; }
    }
}
