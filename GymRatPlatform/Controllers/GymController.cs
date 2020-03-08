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
    [Route("api/gym")]
    [ApiController]
    public class GymController : ControllerBase
    {
        private readonly CheckedInStatusRepository checkedInStatusRepository;
        private readonly ProfileRepository profileRepository;

        public GymController(CheckedInStatusRepository checkedInStatusRepository, ProfileRepository profileRepository) {
            this.checkedInStatusRepository = checkedInStatusRepository;
            this.profileRepository = profileRepository;
        }

        /// <summary>
        /// Gets all of the people checked into a gym
        /// </summary>
        /// <param name="gymName"></param>
        [HttpGet("{gymName}")]
        public List<Profile> GetPeopleAtGym(string gymName) {
            var statuses = checkedInStatusRepository.FindStatusByGymName(gymName);
            List<Profile> profiles = new List<Profile>();
            foreach(var status in statuses) {
                var profile = profileRepository.GetProfileByName(status.ProfileName);
                profiles.Add(profile);
            }

            return profiles;
        }

        /// <summary>
        /// Checks a person into a Gym
        /// </summary>
        /// <param name="nameOfGym"></param>
        /// <param name="nameOfPerson"></param>
        [HttpPost("{nameOfGym}/profile/{nameOfPerson}")]
        public void CheckIntoGym(string nameOfGym, string nameOfPerson) {
            CheckedInStatus status = new CheckedInStatus{
                GymName = nameOfGym,
                ProfileName = nameOfPerson
            };

            checkedInStatusRepository.CreateEntity(status);
        }

        /// <summary>
        /// Checks a person out of a gym
        /// </summary>
        /// <param name="nameOfGym"></param>
        /// <param name="nameOfPerson"></param>
        [HttpDelete("{nameOfGym}/profile/{nameOfPerson}")]
        public void CheckOutOfGym(string nameOfGym, string nameOfPerson) {
            var status = checkedInStatusRepository.FindStatusByNames(nameOfPerson, nameOfGym);
            if (status != null) {
                checkedInStatusRepository.DeleteById(status.Id);
            }
        }
    }
}
