namespace SportsStats.Models.InputModels
{
    public class CreateTeamInputModel
    {
        public Guid TeamId { get; set; }
        public string Name { get; set; }
        public Guid SportId { get; set; }
        public string LogoUrl { get; set; }
        public string PrimaryColour { get; set; }
        public string SecondaryColour { get; set; }
    }
}
