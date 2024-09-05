namespace SportsStats.Models.Sports
{
    public class SportSettingDetail
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public Guid SportId { get; set; }
    }
}
