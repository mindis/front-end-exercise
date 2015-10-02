var React = require('react');
var PreloadImage = require('./PreloadImage.js');
var posts = require('../posts.js');
var Post = React.createClass({
  propTypes: {
    maxWidth: React.PropTypes.number.isRequired,
    post: posts.propType.isRequired
  },
  displayDims: function() {
    var post = this.props.post;
    var factor = 1.0;
    if (post.width > this.props.maxWidth) {
      factor = this.props.maxWidth / post.width;
    }
    var displayWidth = factor * post.width;
    var displayHeight = factor * post.height;
    return { width: displayWidth, height: displayHeight };
  },
  render: function() {
    var post = this.props.post;
    var dim = this.displayDims();
    return (
      <div className="post" style={{width: dim.width}}>
	<PreloadImage src={post.picture} width={dim.width} height={dim.height}/>
	<p>{post.text}</p>
      </div>
    );
  }
});
module.exports = Post;
