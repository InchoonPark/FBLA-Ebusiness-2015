/*Meteor.publish("sortedPageProducts", function(category, sorter) {
  if(sorter === "review") {
    return Products.find({ category: category }, { sort: { reviewScore: 1 } });
  } else if (sorter === "priceHighLow") {
    return Products.find({ category: category }, { sort: { price: -1 } });
  } else if (sorter === "priceLowHigh") {
    return Products.find({ category: category }, { sort: { price: 1 } });
  }
});*/
Meteor.publish("sortedPageProducts", function(category) {
  return Products.find({ category: category });
});

Meteor.publish("allProducts", function() {
  return Products.find();
});

Meteor.publish("featuredProducts", function() {
  return Products.find({ featured: true });
})