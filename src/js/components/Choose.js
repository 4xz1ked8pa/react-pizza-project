var React = require('react');

var Choose = React.createClass({
  render: function() {
    return (
      <div>
        <h1>CHOOSE</h1>
        <div className="choose-toppings">
          <label>Veggie</label><img src="http://crystalhiggins.com/wp-content/uploads/2016/03/broccoli.jpg" />
          <label>Peperonni</label><img src="http://static1.squarespace.com/static/53e11805e4b005e65d41d344/53e3a69be4b0f05a75a9a068/5411df16e4b0a1cae1c29b6d/1461186142050/?format=1000w" />
        </div>
      </div>
    );
  }
});

module.exports = Choose;
