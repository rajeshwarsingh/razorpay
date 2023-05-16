// var instance = new Razorpay({
//   key_id: 'rzp_test_fv7X4W7evtiubV',
//   key_secret: 'P1i9Vx1PaokaOsZBtHXw2Rgx',
// });


const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

var options = {
  amount: 50000,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};
instance.orders.create(options, function(err, order) {
  console.log(order);
});