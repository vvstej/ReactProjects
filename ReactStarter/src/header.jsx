var ReactDOM = require('react-dom');
var React = require('react');


module.exports = React.createClass({
  getInitialState : function(){
    return {text: ""};
  },
  render : function(){
    return <div className="input-group">
      <input type="text" className="form-control" value={this.state.text} onChange={this.handleInputChange}>
        <span className="input-group-btn">
          <button onClick={this.handleClick}

            className="btn btn-default" type="button">
            Add
          </button>
        </span>
      </input>
    </div>
  },
  handleClick : function(){
    // Send value of input to firebase
    this.props.itemStore.push({
      text : this.state.text,
      done: false
    });
    this.setState({text: ''});
  },

  handleInputChange : function(event){
    var inputVal = event.target.value;
    console.log(inputVal);
    this.setState({text: inputVal});
  }
})
