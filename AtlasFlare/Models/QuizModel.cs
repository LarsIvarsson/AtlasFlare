using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AtlasFlare.Models
{
    public class QuizModel
    {
        [Key]
        public int QuizId { get; set; }
        public int Difficulty { get; set; }
        public int HighScore { get; set; }
        [ForeignKey("Student")]
        public int UserId { get; set; }
        public StudentModel? Student { get; set; }
    }
}
