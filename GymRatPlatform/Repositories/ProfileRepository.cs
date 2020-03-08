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
    }
}