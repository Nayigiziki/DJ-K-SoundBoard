var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
    }
  },
  render: function(){
    return <div className="clip">
      <button
        onClick={this.handleClick}
        className="btn btn-default"
        type="button">
        Don't Ever Play Yourself 2
      </button>
    </div>
  },
  handleClick: function(){
    var clip = new Audio('../../assets/dont_ever_play_yourself2.ogg')

    clip.play();
  },
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  }
})
