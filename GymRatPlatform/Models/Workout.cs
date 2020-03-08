using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GymRatPlatform.Models
{
    public class Workout : DatabaseEntity
    {
        /// <summary>
        /// Name of the workout
        /// </summary>
        /// <value></value>
        public string Name { get; set; }

        /// <summary>
        /// Muscle type for catagorization
        /// </summary>
        /// <value></value>
        public string MuscleType { get; set; }

        /// <summary>
        /// Description of workout
        /// </summary>
        /// <value></value>
        public string Description { get; set; }

        /// <summary>
        /// List of strings for the IDs of nested workouts
        /// </summary>
        /// <value></value>
        public string[] WorkoutSequence { get; set; }

        /// <summary>
        /// How long a workout is in seconds
        /// </summary>
        /// <value></value>

        public int TimeSpan { get; set; }
    }
}
