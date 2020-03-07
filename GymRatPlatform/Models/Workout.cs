using System;
using System.Collections.Generic;

namespace GymRatPlatform.Models
{
    public class Workout
    {
        public string Name { get; set; }
        public IEnumerable<Workout> Sequence { get; set; }

        public DateTime TimeSpan { get; set; }
    }
}
