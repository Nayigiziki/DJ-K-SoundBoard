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
        You Loyal
      </button>
    </div>
  },
  handleClick: function(){
    var clip = new Audio('../../assets/you_loyal1.ogg')

    clip.play();
  },
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  }
})
