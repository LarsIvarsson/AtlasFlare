using System.ComponentModel.DataAnnotations;

namespace AtlasFlare.Models
{
    public class StudentModel : UserModel
    {
        public List<QuizModel>? HighScores { get; set; }
    }
}
