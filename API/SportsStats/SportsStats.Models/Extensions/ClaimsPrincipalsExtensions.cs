using System.Security.Claims;

namespace SportsStats.Models.Extensions
{
    public static class ClaimsPrincipalsExtensions
    {
        public static string UserId(this ClaimsPrincipal principal)
        {
            return principal.Claims.FirstOrDefault(c => c.Type == "UserId")?.Value;
        }
    }
}
