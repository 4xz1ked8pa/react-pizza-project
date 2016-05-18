var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Homepage!</h1>
        <p>Welcome to the homepage! Try to click on a link in the nav, then click the browser back button.</p>
      </div>
    );
  }
});

module.exports = Home;
