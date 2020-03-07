using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GymRatPlatform.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GymRatPlatform.Controllers
{
    [Route("api/profile")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        /// <summary>
        /// Gets the profile
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Profile>> GetProfile(string name)
        {
            Profile newProfile = new Profile
            {
                Bio = "A New Bio",
                Points = 100,
                Name = name
            };

            return newProfile;
        }

        /// <summary>
        /// Creates the profile
        /// </summary>
        /// <param name="name">Name of the profile to create</param>
        /// <returns></returns>
        [HttpPost()]
        public async Task<ActionResult<string>> CreateProfile(string name)
        {
            throw new NotImplementedException();
        }
    }
}
