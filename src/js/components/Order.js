var React = require('react');

var Order = React.createClass({
  render: function() {
    return (
      <div className="order-page">
        <h1>ORDER</h1>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email address" />
        <input type="submit" value="next" />
      </div>
    );
  }
});

module.exports = Order;
