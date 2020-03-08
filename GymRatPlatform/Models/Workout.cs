using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GymRatPlatform.Models
{
    public class Workout : DatabaseEntity
    {
        /// <summary>
        /// NameOfWorkout of the workout
        /// </summary>
        /// <value></value>
        public string NameOfWorkout { get; set; }

        /// <summary>
        /// Muscle type for catagorization
        /// </summary>
        /// <value></value>
        public string Type { get; set; }

        /// <summary>
        /// Description of workout
        /// </summary>
        /// <value></value>
        public string Description { get; set; }

        /// <summary>
        /// List of strings for the IDs of nested workouts
        /// </summary>
        /// <value></value>
        public WorkoutSequence[] WorkoutSequence { get; set; }
    }
}
