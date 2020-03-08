using System;
using System.Collections.Generic;
using MongoDB.Driver;
using System.Linq;
using GymRatPlatform.Models;

namespace GymRatPlatform.Repositories
{
    public class CheckedInStatusRepository : BaseRepository<CheckedInStatus>
    {
        public CheckedInStatusRepository() : base("CheckedInStatus") { }

        public CheckedInStatus FindStatusByNames(string nameOfPerson, string nameOfGym) {
            return collection.Find(status => (status.GymName == nameOfGym) && (status.ProfileName == nameOfPerson)).FirstOrDefault();
        }

        public List<CheckedInStatus> FindStatusByGymName(string nameOfGym) {
            return collection.Find(status => status.GymName == nameOfGym).ToList();
        }
    }
}