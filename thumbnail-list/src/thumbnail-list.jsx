var React = require('react');
var Thumbnail = require('./thumbnail');
module.exports = React.createClass({
  render : function(){
    var list = this.props.thumbnailListData.map(function(thumbnailData){
      return <Thumbnail {...thumbnailData}/>
    });
    return <div>
            {list}
           </div>
  }
});
