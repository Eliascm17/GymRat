using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GymRatPlatform.Models
{
    public class WorkoutSequence
    {
        /// <summary>
        /// Exersize To Accomplish
        /// </summary>
        /// <value></value>
        public string Exersize { get; set; }

        /// <summary>
        /// Description of Exersize
        /// </summary>
        /// <value></value>
        public string Description { get; set; }
    }
}
