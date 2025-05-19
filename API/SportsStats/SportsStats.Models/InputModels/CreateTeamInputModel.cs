namespace SportsStats.Models.InputModels
{
    public class CreateTeamInputModel
    {
        public string Name { get; set; }
        public Guid SportId { get; set; }
        public string LogoUrl { get; set; }
    }
}
