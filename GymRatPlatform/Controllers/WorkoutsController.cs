using System.Collections.Generic;
using GymRatPlatform.Models;
using GymRatPlatform.Repositories;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace GymRatPlatform.Controllers
{
    [Route("api/workouts")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        private readonly WorkoutsRepository workoutsRepository;
        private readonly WorkoutUserRelationRepository workoutUserRelationRepository;
        private readonly ProfileRepository profileRepository;
        private readonly SavedWorkoutsRepository savedWorkoutsRepository;

        public WorkoutsController(WorkoutsRepository workoutsRepository, WorkoutUserRelationRepository workoutUserRelationRepository, ProfileRepository profileRepository, SavedWorkoutsRepository savedWorkoutsRepository) {
            this.workoutsRepository = workoutsRepository;
            this.workoutUserRelationRepository = workoutUserRelationRepository;
            this.profileRepository = profileRepository;
            this.savedWorkoutsRepository = savedWorkoutsRepository;
        }

        /// <summary>
        /// Gets all of the Workouts
        /// </summary>
        /// <returns></returns>
        [HttpGet()]
        public IEnumerable<Workout> GetAllWorkouts()
        {
            return workoutsRepository.GetAll();
        }
        
        /// <summary>
        /// Gets all of the saved workouts for a profile
        /// </summary>
        /// <param name="profileName"></param>
        /// <returns></returns>
        [HttpGet("{profileName}/saved")]
        public List<Workout> GetSavedWorkouts(string profileName) {
            var savedWorkouts = savedWorkoutsRepository.GetSavedWorkoutsByProfileName(profileName);
            List<Workout> workouts = new List<Workout>();
            foreach(var savedWorkout in savedWorkouts) {
                var workout = workoutsRepository.GetWorkoutByName(savedWorkout.WorkoutName);
                if (workout != null) {
                    workouts.Add(workout);
                }
            }

            return workouts;
        }

        /// <summary>
        /// Saves a workout to a user's favorites
        /// </summary>
        /// <param name="workoutName"></param>
        /// <param name="profileName"></param>
        [HttpPost("{workoutName}/profiles/{profileName}")]
        public void SaveWorkoutToFavorites(string workoutName, string profileName) {
            SavedWorkout savedWorkout = new SavedWorkout{
                ProfileName = profileName,
                WorkoutName = workoutName
            };

            savedWorkoutsRepository.CreateEntity(savedWorkout);
        }

        /// <summary>
        /// Unsaves a workout from a user's favorites
        /// </summary>
        /// <param name="workoutName"></param>
        /// <param name="profileName"></param>
        [HttpDelete("{workoutName}/profiles/${profileName}")]
        public void UnsaveWorkout(string workoutName, string profileName) {
            var savedWorkout = savedWorkoutsRepository.GetSavedWorkoutByNames(workoutName, profileName);
            if (savedWorkout != null) {
                savedWorkoutsRepository.DeleteById(savedWorkout.Id);
            }
        }

        /// <summary>
        /// Gets all of the Workouts for a User
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet("{name}")]
        public ActionResult<IEnumerable<Workout>> GetAllWorkoutsForAUser(string name)
        {
            List<Workout> workouts = new List<Workout>();
            var profile = profileRepository.GetProfileByName(name);
            if (profile == null) {
                return BadRequest("Could not find entity " + name);
            }
            var workOutRelations = workoutUserRelationRepository.GetWorkOutsForUserByUserId(profile.Id);
            foreach(var workoutRelation in workOutRelations) {
                var workout = workoutsRepository.Get(workoutRelation.WorkoutId);
                workouts.Add(workout);
            }

            return workouts;
        }

        /// <summary>
        /// Creates a workout for a user
        /// </summary>
        /// <param name="name"></param>
        /// <param name="workout"></param>
        /// <returns></returns>
        [HttpPost("profiles/{name}")]
        public void CreateWorkoutForUser(string name, Workout workout)
        {
            Workout newWorkout = new Workout{
                Description = workout.Description,
                Type = workout.Type,
                NameOfWorkout = workout.NameOfWorkout,
                WorkoutSequence = workout.WorkoutSequence 
            };

            // Create the workout
            var workoutId = workoutsRepository.CreateEntity(newWorkout);
            var profile = profileRepository.GetProfileByName(name);

            WorkoutUserRelation relation = new WorkoutUserRelation{
                ProfileId = profile.Id,
                WorkoutId = workoutId
            };

            // Create relation
            workoutUserRelationRepository.CreateEntity(relation);
        }
    }
}