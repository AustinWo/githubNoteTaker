var React = require('react'); // from npm
// var ReactDOM = require('react-dom'); no londer handling the rendering

// create react component
var Main = React.createClass({
    // specify what the UI look like for this element
    render: function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        MENU
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

// parent component to render: Main
// ReactDOM.render(<Main />, document.getElementById('app'));

module.exports = Main;
