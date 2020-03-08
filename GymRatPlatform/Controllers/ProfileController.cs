using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GymRatPlatform.Models;
using GymRatPlatform.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GymRatPlatform.Controllers
{
    [Route("api/profile")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private ProfileRepository profileRepository;

        public ProfileController(ProfileRepository profileRepository) {
            this.profileRepository = profileRepository;
        }

        /// <summary>
        /// Gets the profile using the name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet("{name}")]
        public Profile GetProfile(string name)
        {
            var profiles = this.profileRepository.GetAll();
            foreach(var profile in profiles) {
                if (profile.Name.Equals(name)) {
                    return profile;
                }
            }
            return null;
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
    }
}
