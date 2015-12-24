Template.Header.rendered = function() {
  $(".mainmenu-area").sticky({topSpacing:0});
};

Template.Header.events({
  "click #logout": function() {
    Meteor.logout();
  }
});

Template.Header.helpers({
  "count": function() {
    return Session.get('Cart-itemCount');
  },
  "price": function() {
    return Session.get('Cart-itemTotal');
  }
})