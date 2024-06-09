namespace SportsStats.Models.ViewModels
{
    public class TournamentViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Location { get; set; }
        public Guid SportId { get; set; }
    }
}
