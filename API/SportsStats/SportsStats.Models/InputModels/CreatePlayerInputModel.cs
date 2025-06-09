namespace SportsStats.Models.InputModels
{
    public class CreatePlayerInputModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public Guid SportId { get; set; }
    }
}
