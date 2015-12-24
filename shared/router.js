Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {name: 'Home',
  waitOn: function () {
    return Meteor.subscribe('featuredProducts');
  },
});

Router.route('/about', {name: 'About'});

Router.route('/contact', {name: 'Contact'});

Router.route('/faqs', {name: 'Faqs'});

Router.route('/guarantee', {name: 'Guarantee'});

Router.route('/mission', {name: 'Mission'});

Router.route('/shipping', {name: 'Shipping'});

Router.route('/copyright', {name: 'Copyright'});

Router.route('/error', {name: 'Error'});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('signUp');

AccountsTemplates.configureRoute('forgotPwd');

Router.route('/products/necklaces', { name: 'Necklaces',
  template: 'ProductsPage',
  onRun: function() { Session.set("category", "Necklaces");
                      this.next(); } });

Router.route('/products/earrings', { name: 'Earrings',
  template: 'ProductsPage',
  onRun: function() { Session.set("category", "Earrings");
                      this.next(); } });

Router.route('/products/rings', { name: 'Rings',
  template: 'ProductsPage',
  onRun: function() { Session.set("category", "Rings");
                      this.next(); } });

Router.route('/products/pottery', { name: 'Pottery',
  template: 'ProductsPage',
  onRun: function() { Session.set("category", "Pottery");
                      this.next(); } });

Router.route('/products/paintings', { name: 'Paintings',
  template: 'ProductsPage',
  onRun: function() { Session.set("category", "Paintings");
                      this.next(); } });

Router.route('/products/sculptures', { name: 'Sculptures',
  template: 'ProductsPage',
  onRun: function() { Session.set("category", "Sculptures");
                      this.next(); } });

Router.route('/products/:_urlName', {
  name: 'single.product',
  waitOn: function () {
    var urlName = this.params._urlName;
    return Meteor.subscribe('getSingleProduct', urlName);
  },
  data: function () {
    var urlName = this.params._urlName;
    var product = Products.findOne({ urlName: urlName });
    if(!product) {
      this.render('NotFound');
    } else {
      return product;
    }
  },
});

Router.route('/shopping-cart', function () {
  this.render('SketchceptionCartItems', {
    data: function () { 
      var query = {};
      if(Meteor.userId())
        query.userId = Meteor.userId();
      else
        query.deviceId = Session.get('Cart-deviceId');
      return {
        items:Cart.Items.find(query),
        hasItems:!Session.equals('Cart-itemCount', 0),
        itemCount:Session.get('Cart-itemCount'),
        itemTotal:Session.get('Cart-itemTotal')
      };
    }
  });
}, {
  waitOn: function () {
    return Meteor.subscribe('allProducts');
  },
  name: 'Cart'
});

Router.route('/checkout', { name: 'Checkout' });