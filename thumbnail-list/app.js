var thumbnailListData = {
  thumbnailListData : [
    {
      imageSrc : "http://s1.q4cdn.com/454432842/files/design/newlogo-company.png",
      imageAltText : "Salesforce.com",
      thumbLabel : "Salesforce",
      thumbDescription : "Salesforce is a global leader in providing a cloud CRM solution",
      badgeTitle : "Employees",
      badgeVal : 5454
    },
    {
      imageSrc : "http://img2.wikia.nocookie.net/__cb20130907154026/logopedia/images/thumb/7/77/Vmware-logo.png/500px-Vmware-logo.png",
      imageAltText : "Vmware",
      thumbLabel : "VMWare",
      thumbDescription : "VMWare is a global leader in virtualization",
      badgeTitle : "Employees",
      badgeVal : 9876
    }
  ]
}

var element = React.createElement(ThumbnailList,thumbnailListData);
React.render(element,document.body);

var Badge = React.createClass({displayName: "Badge",
  render : function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
              this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.val)
           )
    }
  });

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render : function(){
    var list = this.props.thumbnailListData.map(function(thumbnailData){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailData))
    });
    return React.createElement("div", null, 
            list
           )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render : function() {
    return  React.createElement("div", {className: "col-sm-6 col-md-4"}, 
              React.createElement("div", {className: "thumbnail"}, 
                React.createElement("img", {src: this.props.imageSrc, alt: this.props.imageAltText}), 
                React.createElement("div", {className: "caption"}, 
                  React.createElement("h3", null, this.props.thumbLabel), 
                  React.createElement("p", null, this.props.thumbDescription), 
                  React.createElement("p", null, React.createElement(Badge, {title: this.props.badgeTitle, val: this.props.badgeVal}))
                )
              )
            )
  }
});
