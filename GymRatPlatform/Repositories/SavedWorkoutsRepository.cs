using System;
using System.Collections.Generic;
using MongoDB.Driver;
using System.Linq;
using GymRatPlatform.Models;

namespace GymRatPlatform.Repositories
{
    public class SavedWorkoutsRepository : BaseRepository<SavedWorkout>
    {
        public SavedWorkoutsRepository() : base("SavedWorkouts") { }

        public SavedWorkout GetSavedWorkoutByNames(string workoutName, string profileName) {
            return collection.Find(workout => (workout.ProfileName == profileName) && (workout.WorkoutName == workoutName)).FirstOrDefault();
        }

        public List<SavedWorkout> GetSavedWorkoutsByProfileName(string profileName) {
            return collection.Find(savedWorkouts => savedWorkouts.ProfileName == profileName).ToList();
        }
    }
}