var ReactDOM = require('react-dom');
var React = require('react');
var rootUrl = "https://shining-fire-2339.firebaseio.com/";
module.exports = React.createClass({
  getInitialState : function(){
    return {
      text : this.props.item.text,
      done : this.props.item.done,
      textChanged : false
    }
  },
  componentWillMount : function(){
    this.fb = new Firebase(rootUrl+"items/"+this.props.keyName);
    //console.log(this.props.item.id);
    console.log(this.props);
  },
  render : function(){
    return <div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox"
          checked={this.state.done}
          onChange = {this.handleCheckboxChange}/>
      </span>
      <input type="text"
        disabled = {this.state.done}
        className="form-control"
        value={this.state.text}
        onChange={this.handleTextChange}
        />
      <span className="input-group-btn">
        {this.changesButtons()}
        <button className="btn btn-default"
          onClick={this.handleDelete}>
          Delete
        </button>
      </span>
    </div>
  },
  handleDelete : function(){
    this.fb.remove();
  },
  changesButtons : function(){
    if(!this.state.textChanged){
      return null;
    }
    return [
      <button className="btn btn-default" onClick={this.handleSaveClick}>Save</button>,
      <button className="btn btn-default" onClick={this.handleUndoClick}>Undo</button>
    ]
  },
  handleUndoClick : function(){
    this.setState({
      text : this.props.item.text,
      textChanged : false
    })
  },
  handleSaveClick : function(event){
    this.fb.update({
      text : this.state.text
    });
    this.setState({
      textChanged : false
    });

  },
  handleTextChange : function(event) {
    this.setState({
      text: event.target.value,
      textChanged : true
    });
  },
  handleCheckboxChange : function(event){
    this.setState({done : event.target.checked})
    this.fb.update({
      done : event.target.checked
    })
  }
})
