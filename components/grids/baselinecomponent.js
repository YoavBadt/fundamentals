import React from 'react';

var BaseLineComponent = React.createClass({
render : function() {
  var gridStyle = {
      width:'100vw',
      height:'100vh',
      position: 'absolute',
      left: '0',
      top: '0'
    }
    var baseLineHeight = this.props.state.baseLineHeight * this.props.state.baseUnit;
    var baseLineHeight2 = baseLineHeight - 0.5;
    var visibility = this.props.state.baseLineVisibility;
    var div = baseLineHeight / this.props.state.baseLineHeightDivision;
    var div2 = div - 0.5;
    var color = this.props.state.baselineColor;
    
  return (
      <div>
      <svg style={gridStyle}>
        <defs>
          <pattern id="Division" x="0" y="0" width="100%" height={div} patternUnits="userSpaceOnUse">
            <line strokeWidth="1" stroke={color} strokeOpacity="1" x1="0" x2="100%" y1={div2} y2={div2} strokeDasharray="1,1"/>
          </pattern>
          <pattern id="baselinePattern" x="0" y="0" width="100%" height={baseLineHeight} patternUnits="userSpaceOnUse">
          <line strokeWidth="1" stroke={color} strokeOpacity="1" x1="0" x2="100%" y1={baseLineHeight2} y2={baseLineHeight2} />
            <rect x="0" y="0" width="100%" height={baseLineHeight} fillOpacity="1"  strokeOpacity="0" fill="url(#Division)"/>
          </pattern>
        </defs>
          <rect  x="0" y="0" width="100%" height="100%" fill="url(#baselinePattern)" fillOpacity={visibility}></rect>
      </svg>
      </div>
    )
 }
});

export default BaseLineComponent
