var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
    }
  },
  render: function(){
    return <div className="input-group">
      <button
        onClick={this.handleClick}
        className="btn btn-default"
        type="button">
        Don't Ever Play Yourself 1
      </button>
    </div>
  },
  handleClick: function(){
    var clip = new Audio('../../assets/dont_ever_play_yourself1.ogg')

    clip.play();

  },
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  }
})
