using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GymRatPlatform.Models
{
    public class Gym
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Name { get; set; }
        public Tuple<double, double> Coordinates { get; set; }
    }
}
