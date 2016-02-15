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
        Lion
      </button>
    </div>
  },
  handleClick: function(){
    var clip = new Audio('../../assets/lion.ogg')

    clip.play();
  },
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  }
})
