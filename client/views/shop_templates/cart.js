Template.SketchceptionCartItem.events({
  "click #remove-button":function(event, template){
    event.preventDefault();
    var id = this._id;
    Cart.Items.remove({_id: id});
  },
});

Template.SketchceptionCartItems.helpers({
  'sketchceptionItemTotal':function(){
    return Session.get('Cart-itemTotal');
  },
  'cartIsNotEmpty': function() {
    var itemCount = Session.get('Cart-itemCount');
    if(itemCount == 0) {
      return false;
    } else {
      return true;
    }
  },
});

Template.SketchceptionCartItems.events({
    "keyup input": _.throttle(function() {
      var address = $("[name='address']").val();
      var city = $("[name='city']").val();
      var state = $("[name='state']").val();
      var postcode = $("[name='postcode']").val();
      var country = $("[name='country']").val();
      if(address && city && state && postcode && country) {
        $(".checkout-button").fadeIn();
      } else {
        $(".checkout-button").fadeOut();
      }
    }, 1000)
});
Template.SketchceptionCartPayNow.events({
  'click #pay-now':function(event, template){
    event.preventDefault();
    StripeCheckoutHandler.open({
        description: Session.get('Cart-itemCount') + ' items ($' + Session.get("Cart-itemTotal") + ')',
        amount: Math.floor(Session.get("Cart-itemTotal") * 100)
      });
  }
});

Template.SketchceptionCartPayNow.rendered = function(){
  StripeCheckoutHandler = StripeCheckout.configure({
      key: Meteor.settings.public.stripe_pk,
      token: function(token) {
        Meteor.call("CartPayForItems", token, Session.get('Cart-deviceId'), function(error, result) {
          if (error) {
            Router.go("Error");
          } else{
            successDialog.show();
          }
         });
      }
    });
};
