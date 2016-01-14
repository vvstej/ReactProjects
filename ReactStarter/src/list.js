var React = require('react');
var ListItem = require('./list-item');
module.exports = React.createClass({displayName: "exports",
  render : function(){
    console.log(this.props.items)
    return React.createElement("div", null, 
      this.renderList()
    )
  },
  renderList: function(){
    console.log(this.props.items)
    if(!this.props.items){
      return React.createElement("h4", null, 
        "Add a todo to get started"
      )
    }else{
      var children = [];
      for(var key in this.props.items){
        console.log(key);
        children.push(
          React.createElement(ListItem, {item: this.props.items[key], keyName: key}

          )
        );
      }
      return children;
    }
  }
})