Template.MasterLayout.events({
  "click .add-to-cart-button": function() {
    var quantity = $("[name='quantity']").val();
    if(!quantity) {
      quantity = 1;
    }
    var item = this;
    if(item._id){
      item.productId = item._id;
      delete item._id;
    }
    if(!Meteor.userId()) {
      item.deviceId = Session.get('Cart-deviceId');
    } else {
      item.userId = Meteor.userId();
    }
    for(var i = 0; i < quantity; i++) {
     Cart.Items.insert(item); 
   }
   cartDialog.show();
 }
})