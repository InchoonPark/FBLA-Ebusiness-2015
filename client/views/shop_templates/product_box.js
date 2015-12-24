Template.ProductBox.events({
  'click #more_details_button': function() {
    Router.go("single.product", { _urlName: this.urlName });
  }
});

Template.ProductBox.helpers({
  rating: function() {
    var ratingTotal = this.ratingTotal;
    var reviewNum = this.reviewNum;
    var rating = (ratingTotal)/(reviewNum);
    return rating;
  }
});