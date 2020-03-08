using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GymRatPlatform.Models
{
    public class CheckedInStatus : DatabaseEntity
    {
        public string GymName { get; set; }
        public string ProfileName { get; set; }
    }
}
