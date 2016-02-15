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
        You Grateful
      </button>
    </div>
  },
  handleClick: function(){
    var youSmart = new Audio('../../assets/you_grateful1.ogg')

    youSmart.play();
    // Send value of text input to Firebase
    console.log(this);
    // this.props.itemsStore.push({
    //   text: this.state.text,
    //   done: false
    // });
    //
    // this.setState({text: ''});
  },
  handleInputChange: function(event){
    this.setState({text: event.target.value});
  }
})
