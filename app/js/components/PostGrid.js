var React = require('react');
var Masonry = require('masonry-layout');
var Post = require('./Post.js');
var posts = require('../posts.js');
var PostGrid = React.createClass({
  propTypes: {
    maxWidth: React.PropTypes.number.isRequired,
    posts: React.PropTypes.arrayOf(posts.propType).isRequired
  },
  getDefaultProps: function() {
    return { maxWidth: 200 };
  },
  componentDidMount: function() {
    var container = React.findDOMNode(this.refs.container);
    var msnry = new Masonry(container, {
      itemSelector: '.post',
      isFitWidth: true
    });
    msnry.layout();
  },
  render: function() {
    var maxWidth = this.props.maxWidth;
    var makePost = function(post) {
      return <Post post={post} key={post.id} maxWidth={maxWidth}/>;
    };
    var posts = this.props.posts.map(makePost);
    return <div ref="container" className="post-grid">{posts}</div>;
  }
});
module.exports = PostGrid;
