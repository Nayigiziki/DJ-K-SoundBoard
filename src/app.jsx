var React = require('react');
var ReactDOM = require('react-dom');
var SoundBoard = require('./components/sound-board')

var App = React.createClass({
  render: function() {
    return (<div className="red">
      <h1>DJ Khaled Soundboard</h1>
      <SoundBoard />
    </div>
    )
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
