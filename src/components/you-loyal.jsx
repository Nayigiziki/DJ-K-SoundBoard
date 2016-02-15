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
        You Loyal
      </button>
    </div>
  },
  handleClick: function(){ 
    var youLoyal = new Audio('../../assets/you_loyal1.ogg')

    youLoyal.play();
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
