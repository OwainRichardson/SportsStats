﻿using System.ComponentModel.DataAnnotations;

namespace SportsStats.Data.Entities
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
