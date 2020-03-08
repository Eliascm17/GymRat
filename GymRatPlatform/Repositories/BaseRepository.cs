using System;
using System.Collections.Generic;
using MongoDB.Driver;
using System.Linq;
using GymRatPlatform.Models;

namespace GymRatPlatform.Repositories
{
    public abstract class BaseRepository<T> where T : DatabaseEntity
    {
        protected readonly IMongoCollection<T> collection;

        public BaseRepository(string collectionName) {
            string connectionString = Environment.GetEnvironmentVariable("MONGODB_CONN_STRING");

            var client = new MongoClient(connectionString);

            IMongoDatabase db = client.GetDatabase("gymrat");

            collection = db.GetCollection<T>(collectionName);
        }

        public IEnumerable<T> GetAll() {
            return collection.Find(_ => true).ToList();
        }

        public string CreateEntity(T entity) {
            collection.InsertOne(entity);
            return entity.Id;
        }

        public T Get(string id) {
            var results = collection.Find(entity => entity.Id == id);
            return results.FirstOrDefault();
        }

        public void Update(string id, T update) {
            collection.FindOneAndReplace(entity => entity.Id == id, update);
        }
    }
}