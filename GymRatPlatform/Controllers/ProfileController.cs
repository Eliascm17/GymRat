using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GymRatPlatform.Models;
using GymRatPlatform.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;

namespace GymRatPlatform.Controllers
{
    [Route("api/profile")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly ProfileRepository profileRepository;

        public ProfileController(ProfileRepository profileRepository) {
            this.profileRepository = profileRepository;
        }

        /// <summary>
        /// Gets all Profiles
        /// </summary>
        /// <returns></returns>
        [HttpGet()]
        public IEnumerable<Profile> GetAllProfiles() {
            return profileRepository.GetAll();
        }

        /// <summary>
        /// Gets the profile using the name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet("{name}")]
        public Profile GetProfile(string name)
        {
            return profileRepository.GetProfileByName(name);
        }

        /// <summary>
        /// Creates the profile
        /// </summary>
        /// <param name="name">Name of the profile to create</param>
        /// <returns></returns>
        [HttpPost("{name}")]
        public void CreateProfile(string name)
        {
            Profile profile = new Profile
            {
                Name = name,
                Bio = "Hello fellow Gym Rats!",
                Points = 0
            };
            
            this.profileRepository.CreateEntity(profile);
        }

        /// <summary>
        /// Updates the points for a given user
        /// </summary>
        /// <param name="name"></param>
        /// <param name="points"></param>
        [HttpPut("{name}/points/{points}")]
        public ActionResult SetNewPointsForUser(string name, int points) {
            Profile focusedProfile = profileRepository.GetProfileByName(name);

            if (focusedProfile == null) {
                return BadRequest("Could not find entity " + name);
            }

            Profile newProfile = new Profile{
                Bio = focusedProfile.Bio,
                Id = focusedProfile.Id,
                Name = focusedProfile.Name,
                Points = points
            };

            profileRepository.Update(newProfile.Id, newProfile);
            return Ok();
        }
    }
}
