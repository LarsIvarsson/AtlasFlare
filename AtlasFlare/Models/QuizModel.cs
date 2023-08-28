using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace AtlasFlare.Models
{
    public class QuizModel
    {
        [Key]
        public int QuizId { get; set; }
        public int HighScore { get; set; }
    }
}
