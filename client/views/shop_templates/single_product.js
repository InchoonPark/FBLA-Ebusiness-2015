Template.SingleProduct.events({
  'submit #form': function(event) {
    event.preventDefault();
    var productUrlName = Template.currentData().urlName;
    console.log(productUrlName);
    var name = $("[name='name']").val();
    var reviewRating = $('#rating').data('userrating');
    var reviewSummary = $("[name='review-summary']").val();
    if(name && reviewRating && reviewSummary && productUrlName) {
      Meteor.call("insertReview", name, reviewRating, reviewSummary, productUrlName, function(error, result) {
        if(!error) {
          $(".alert").fadeOut();
          $("#form")[0].reset();
        }
      });
    } else {
      $(".alert").fadeIn();
    }
  }, 
  'submit #cart-form': function(event) {
    event.preventDefault();
  }
});

Template.SingleProduct.rendered = function() {
  var name = this.name;
}