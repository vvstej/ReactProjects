var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require("./header");
var rootUrl = "https://shining-fire-2339.firebaseio.com/";
var List = require("./list");

var App = React.createClass({displayName: "App",
  mixins: [ReactFire],
  getInitialState: function(){
    return {
      items : {},
      loaded : false
    }
  },
  componentWillMount : function(){
    this.fb = new Firebase(rootUrl+'items/');
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', function(){
      this.setState({
        loaded : true
      });
    }.bind(this));

    //this.state.items => {}
  },
  handleDataLoaded : function(){
    this.setState({
      loaded : true
    });
  },
  render: function() {
    return React.createElement("div", {className: "row panel panel-default"}, 
      React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
        React.createElement("h2", {className: "text-center"}, 
          "To Do Center"
        ), 
        React.createElement(Header, {itemStore: this.firebaseRefs.items}), 
        React.createElement("hr", null), 
        React.createElement("div", {className: "content " + (this.state.loaded ? "loaded" : "")}, 
          React.createElement(List, {items: this.state.items}), 
          this.deleteButton()
        )

    )
    )
  },
  deleteButton : function(){
    if(!this.state.loaded){
      return
    } else {
      return React.createElement("div", {className: "text-center clear-complete"}, 
      React.createElement("hr", null), 
      React.createElement("button", {type: "button", onClick: this.onDeleteDoneClick, 
        className: "btn btn-default"}, 
        "Clear Selected"
      )
      )
    }
  },
  onDeleteDoneClick : function(){
    for(var key in this.state.items){
      if(this.state.items[key].done === true){
        this.fb.child(key).remove();
      }
    }
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));