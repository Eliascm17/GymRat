using System;
using System.Collections.Generic;
using MongoDB.Driver;
using System.Linq;
using GymRatPlatform.Models;

namespace GymRatPlatform.Repositories
{
    public class ProfileRepository : BaseRepository<Profile>
    {
        public ProfileRepository() : base("Profiles") { }

        public Profile GetProfileByName(string name) {
            var profiles = GetAll();
            foreach(var profile in profiles) {
                if (profile.Name.Equals(name)) {
                    return profile;
                }
            }

            return null;
        }
    }
}