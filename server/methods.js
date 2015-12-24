Meteor.methods({
  insertReview: function(name, rating, reviewSummary, productUrlName) {
    Reviews.insert({ name: name, rating: rating, reviewSummary: reviewSummary, 
      productUrlName: productUrlName });
    Products.update({ urlName: productUrlName }, {$inc: {reviewNum: 1}});
    Products.update({ urlName: productUrlName }, {$inc: {ratingTotal: rating}});
  }
})