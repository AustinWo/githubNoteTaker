var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfiles = require('./Github/UserProfiles');
var Notes = require('./Notes/Notes');


var Profile = React.createClass({
  getInitialState: function() {
    return {
      notes: [1,2,3],
      bio: {
        name:'Austin Worachet'
      },
      repos: ['a','b','c'],
    }
  },
  render: function() {
    console.log(this.props);
    return(
      <div className="row">
        <div className="col-md-4">
        <UserProfiles username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="cold-md-4">
          <Repos repos={this.state.repos}/>
        </div>
        <div className="cold-md-4">
          <Notes notes={this.state.repos}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;
