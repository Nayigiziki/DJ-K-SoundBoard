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
        Another One 2
      </button>
    </div>
  },
  handleClick: function(){
    var clip = new Audio('../../assets/another-one2.ogg')

    clip.play();
  },
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  }
})
