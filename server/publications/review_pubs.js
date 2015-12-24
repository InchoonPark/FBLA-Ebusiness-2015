Meteor.publishComposite('getSingleProduct', function (urlName) {
  return {
    find: function() {
      return Products.find({ urlName: urlName });
    },
    children: [
      {
        find: function(product) {
          return Reviews.find({ productUrlName: product.urlName }, { sort: { createdAt : -1 } });
        }
      }
    ]
  }
});