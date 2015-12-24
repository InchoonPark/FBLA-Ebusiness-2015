Reviews = new Mongo.Collection("reviews");

Reviews.before.insert(function (userId, doc) {
  doc.createdAt = Date.now();
});