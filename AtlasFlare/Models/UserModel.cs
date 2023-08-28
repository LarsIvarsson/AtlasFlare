using System.ComponentModel.DataAnnotations;

namespace AtlasFlare.Models
{
    public class UserModel
    {
        [Key]
        public int UserId { get; set; }
        [Required]
        public string Username { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
    }
}
