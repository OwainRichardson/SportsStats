namespace SportsStats.Models.Sports
{
    public class TournamentSettingDetail
    {
        public Guid Id { get; set; }
        public Guid SportSettingId { get; set; }
        public string Value { get; set; }
        public Guid TournamentId { get; set; }
    }
}
