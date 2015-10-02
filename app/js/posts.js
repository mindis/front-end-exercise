var config = require('./config.js');
var React = require('react');
var xhr = require('xhr');
var posts = {};

var imageDimensions = function(post) {
  var dimRegex = /(\d+)\/(\d+)$/;                                               
  var match = dimRegex.exec(post.picture);
  if (match.length == 3) {
    post.width = parseInt(match[1]);
    post.height = parseInt(match[2]);
  } else {
    throw "Could not get dimensions for image: " + post.picture;
  }
};

posts.propType = React.PropTypes.shape({
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
  picture: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
});

posts.get = function(success, error) {
  var callback = function(err, resp, body) {
    if (resp.statusCode == 200) {
      var data = JSON.parse(body);
      data.forEach(imageDimensions);
      return success(data);
    } else if (err) {
      return error(err);
    } else {
      return error("Server returned " + resp.statusCode);
    }
  };
  return xhr(config.url, callback);
};

module.exports = posts;
