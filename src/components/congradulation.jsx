var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
    }
  },
  render: function(){
    return <div>
      <button
        onClick={this.handleClick}
        className="btn btn-default"
        type="button">
        Congratulations..<br />You Played Yourself
      </button>
    </div>
  },
  handleClick: function(){
    var clip = new Audio('../../assets/congradulations_you_played_yourself.ogg')

    clip.play();
  },
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  }
})
