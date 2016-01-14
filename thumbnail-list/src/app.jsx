var React = require('react');
var ThumbnailList = require('./thumbnail-list');
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
};

var element = React.createElement(ThumbnailList,thumbnailListData);
React.render(element,document.getElementById("container"));
