using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GymRatPlatform.Models
{
    public class Profile : DatabaseEntity
    {
        public string Name { get; set; }
        public string Bio { get; set; }
        public int Points { get; set; }
    }
}
