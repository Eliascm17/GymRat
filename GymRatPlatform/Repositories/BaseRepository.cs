using System;
using System.Collections.Generic;
using MongoDB.Driver;
using System.Linq;
using GymRatPlatform.Models;

namespace GymRatPlatform.Repositories
{
    public abstract class BaseRepository<T> where T : DatabaseEntity
    {
        private readonly IMongoCollection<T> collection;

        public BaseRepository(string collectionName) {
            string connectionString = Environment.GetEnvironmentVariable("MONGODB_CONN_STRING");

            string environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            var client = new MongoClient(connectionString);
            IMongoDatabase db;

            if (!environment.Equals("Development")) {
                db = client.GetDatabase("gymratprod");
            } else {
                db = client.GetDatabase("gymratdev");
            }

            collection = db.GetCollection<T>(collectionName);
        }

        public IEnumerable<T> GetAll() {
            return collection.Find(_ => true).ToList();
        }

        public void CreateEntity(T entity) {
            collection.InsertOne(entity);
        }

        public T Get(string id) {
            var results = collection.Find(entity => entity.Id == id);
            return results.FirstOrDefault();
        }
    }
}