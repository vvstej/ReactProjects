var ReactDOM = require('react-dom');
var React = require('react');
var ListItem = require('./list-item');
module.exports = React.createClass({
  render : function(){
    console.log(this.props.items)
    return <div>
      {this.renderList()}
    </div>
  },
  renderList: function(){
    console.log(this.props.items)
    if(!this.props.items){
      return <h4>
        Add a todo to get started
      </h4>
    }else{
      var children = [];
      for(var key in this.props.items){
        console.log(key);
        children.push(
          <ListItem item={this.props.items[key]} keyName={key}>

          </ListItem>
        );
      }
      return children;
    }
  }
})
