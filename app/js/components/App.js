var React = require('react');
var PostGrid = require('./PostGrid.js');
var Spinner = require('./Spinner.js');
var Panel = require('react-bootstrap').Panel;
var posts = require('../posts.js');
var App = React.createClass({
  getInitialState: function() {
    return { loading: true, error: null, posts: null };
  },
  updatePosts: function(data) {
    this.setState({ loading: false, posts: data, error: null });
  },
  setError: function(err) {
    this.setState({ loading: false, posts: null, error: err });
  },
  componentWillMount: function() {
    posts.get(this.updatePosts, this.setError);
  },
  renderLoading: function() {
    return <div className="middle"><Spinner width={50} height={50}/></div>;
  },
  renderError: function() {
    return <Panel header="Error" bsStyle="danger">{this.state.error}</Panel>;
  },
  renderPosts: function() {
    return <PostGrid posts={this.state.posts}/>;
  },
  render: function() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.error) {
      return this.renderError();
    } else {
      return this.renderPosts();
    }
  }
});
module.exports = App;
