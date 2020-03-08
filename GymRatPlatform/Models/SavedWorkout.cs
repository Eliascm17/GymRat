using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GymRatPlatform.Models
{
    public class SavedWorkout : DatabaseEntity
    {
        public string WorkoutName { get; set; }
        public string ProfileName { get; set; }
    }
}
