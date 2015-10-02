var React = require('react');
var Spinner = require('./Spinner.js');
var PreloadImage = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
  },
  getInitialState: function() {
    return { showImage: false };
  },
  componentDidMount: function() {
    var img = new Image();
    img.src = this.props.src;
    img.onload = function() {
      this.setState({ showImage: true });
    }.bind(this);
  },
  renderImage: function() {
    var src = this.props.src;
    var width = this.props.width;
    var height = this.props.height;
    return <img src={src} width={width} height={height}/>;
  },
  renderSpinner: function() {
    return <Spinner width={this.props.width} height={this.props.height}/>;
  },
  render: function() {
    if (this.state.showImage) {
      return this.renderImage();
    } else {
      return this.renderSpinner();
    }
  }
});
module.exports = PreloadImage;
