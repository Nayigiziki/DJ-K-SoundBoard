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
        I Appreciate That
      </button>
    </div>
  },
  handleClick: function(){
    var clip = new Audio('../../assets/i_appreciate_that.ogg')

    clip.play();
  },
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  }
})
