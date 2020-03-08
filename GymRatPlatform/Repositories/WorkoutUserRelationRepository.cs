using System;
using System.Collections.Generic;
using MongoDB.Driver;
using System.Linq;
using GymRatPlatform.Models;

namespace GymRatPlatform.Repositories
{
    public class WorkoutUserRelationRepository : BaseRepository<WorkoutUserRelation>
    {
        public WorkoutUserRelationRepository() : base("WorkoutUserRelation") { }

        public List<WorkoutUserRelation> GetWorkOutsForUserByUserId(string id) {
            return collection.Find(entity => entity.ProfileId == id).ToList();
        }
    }
}