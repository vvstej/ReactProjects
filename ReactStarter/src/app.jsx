var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require("./header");
var rootUrl = "https://shining-fire-2339.firebaseio.com/";
var List = require("./list");

var App = React.createClass({
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
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To Do Center
        </h2>
        <Header itemStore = {this.firebaseRefs.items}/>
        <hr></hr>
        <div className = {"content " + (this.state.loaded ? "loaded" : "")}>
          <List items={this.state.items}></List>
          {this.deleteButton()}
        </div>

    </div>
    </div>
  },
  deleteButton : function(){
    if(!this.state.loaded){
      return
    } else {
      return <div className="text-center clear-complete">
      <hr></hr>
      <button type="button" onClick={this.onDeleteDoneClick}
        className="btn btn-default">
        Clear Selected
      </button>
      </div>
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
