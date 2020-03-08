namespace GymRatPlatform.Models
{
    public class WorkoutUserRelation : DatabaseEntity
    {
        public string ProfileId { get; set; }
        public string WorkoutId { get; set; }
    }
}
