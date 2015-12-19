var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    userName: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function(){
    return(
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" />
      </div>
    )
  }
});

module.exports = AddNote;
