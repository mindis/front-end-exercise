var React = require('react');
var Spinner = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
  },
  render: function() {
    var style = { width: this.props.width, height: this.props.height };
    return <div className="spinner" style={style}></div>;
  }
});
module.exports = Spinner;
