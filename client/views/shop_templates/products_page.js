Deps.autorun(function() {
  var category = Session.get("category");
  Meteor.subscribe("sortedPageProducts", category);
});

Template.ProductsPage.helpers({
  category: function() {
    var category = Session.get("category");
    return category;
  },
});

Template.ProductsPage.events({
  'click .form-control': function() {
    Session.set("sortOption", $(".form-control").val());
  }
})