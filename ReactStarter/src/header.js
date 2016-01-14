var React = require('react');


module.exports = React.createClass({displayName: "exports",
  getInitialState : function(){
    return {text: ""};
  },
  render : function(){
    return React.createElement("div", {className: "input-group"}, 
      React.createElement("input", {type: "text", className: "form-control", value: this.state.text, onChange: this.handleInputChange}, 
        React.createElement("span", {className: "input-group-btn"}, 
          React.createElement("button", {onClick: this.handleClick, 

            className: "btn btn-default", type: "button"}, 
            "Add"
          )
        )
      )
    )
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