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

        public WorkoutsController(WorkoutsRepository workoutsRepository, WorkoutUserRelationRepository workoutUserRelationRepository, ProfileRepository profileRepository) {
            this.workoutsRepository = workoutsRepository;
            this.workoutUserRelationRepository = workoutUserRelationRepository;
            this.profileRepository = profileRepository;
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
                var workout = this.workoutsRepository.Get(workoutRelation.WorkoutId);
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
                MuscleType = workout.MuscleType,
                Name = workout.Name,
                TimeSpan = workout.TimeSpan,
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