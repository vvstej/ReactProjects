var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
  render : function() {
    return  <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src={this.props.imageSrc} alt={this.props.imageAltText}></img>
                <div className="caption">
                  <h3>{this.props.thumbLabel}</h3>
                  <p>{this.props.thumbDescription}</p>
                  <p><Badge title={this.props.badgeTitle} val={this.props.badgeVal}/></p>
                </div>
              </div>
            </div>
  }
});
