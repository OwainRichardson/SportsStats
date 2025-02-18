namespace SportsStats.Models.ViewModels
{
    public class TournamentViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public Guid SportId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string FormattedStartDate
        {
            get
            {
                return StartDate.ToShortDateString();
            }
        }
        public string FormattedEndDate
        {
            get
            {
                return EndDate.ToShortDateString();
            }
        }
    }
}
