using System;
using System.Collections.Generic;
using MongoDB.Driver;
using System.Linq;
using GymRatPlatform.Models;
using MongoDB.Bson;

namespace GymRatPlatform.Repositories
{
    public class WorkoutsRepository : BaseRepository<Workout>
    {
        public WorkoutsRepository() : base("Workouts") { }

        public Workout GetWorkoutByName(string workoutName) {
            return collection.Find(workout => workout.NameOfWorkout == workoutName).FirstOrDefault();
        }
    }
}