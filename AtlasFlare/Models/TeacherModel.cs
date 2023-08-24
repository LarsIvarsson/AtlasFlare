using System.ComponentModel.DataAnnotations;

namespace AtlasFlare.Models
{
    public class TeacherModel : UserModel
    {
        public bool IsAdmin { get; set; } = true;
    }
}
