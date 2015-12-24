Template.registerHelper("products", function() { return Products.find(); });

Template.registerHelper("reviews", function() { return Reviews.find(); });

Meteor.startup(function() {
  cartDialogInfo = {
    template: Template.CartDialog,
    title: "Added to cart!",
    modalDialogClass: "cart-modal-dialog",
    removeOnHide: false,
    buttons: {
      "cancel": {
        class: 'product_button',
        label: 'Continue shopping'
      },
      "ok": {
        class: 'product_button',
        label: 'Checkout'
      }
    },
  }

  cartDialog = ReactiveModal.initDialog(cartDialogInfo);

  cartDialog.buttons.ok.on('click', function(button) {
    Router.go("Cart");
  });

  successDialogInfo = {
    template: Template.SuccessDialog,
    title: "Success!",
    modalDialogClass: "cart-modal-dialog",
    removeOnHide: false,
    buttons: {
      "ok": {
        class: 'product_button',
        label: 'Return to home!'
      }
    },
  }

  successDialog = ReactiveModal.initDialog(successDialogInfo);

  successDialog.buttons.ok.on('click', function(button) {
    Router.go("Home");
  });
});