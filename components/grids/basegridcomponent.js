import React from 'react';

var BaseGridComponent = React.createClass({
render : function(){
  var gridStyle = {
    width:'100vw',
    height:'100vh',
    position: 'absolute',
    left: '0',
    top: '0'
    }
    var offset = this.props.state.baseOffSet;
    var visibility1 = this.props.state.baseVisibility;
    var baseUnit = this.props.state.baseUnit;
    var divisions = this.props.state.baseDivisions;
    var baseDiv = baseUnit / divisions;
    var points = ['0,'+baseUnit,+baseUnit+','+baseUnit,+baseUnit+',0'];
    var points2 = ['0,'+baseDiv,+baseDiv+','+baseDiv,+baseDiv+',0'];

    return(
    <div>
      <svg  style={gridStyle}>
        <defs>
          <pattern id="D_Pattern" x="0" y="0" width={baseDiv} height={baseDiv} patternUnits="userSpaceOnUse">
            <polyline points={points2} stroke="black" fillOpacity="0" strokeOpacity="0.8" />
          </pattern>
          <pattern id="Pattern" x={offset} y="0" width={baseUnit} height={baseUnit} patternUnits="userSpaceOnUse">
            <polyline points={points} stroke="black" fillOpacity="0" strokeOpacity="0.5"/>
            <rect  x="0" y="0" width={baseUnit} height={baseUnit} fill="url(#D_Pattern)" fillOpacity="0.5"></rect>
          </pattern>
        </defs>
        <rect  x="0" y="0" width="100%" height="100%" fill="url(#Pattern)" fillOpacity={visibility1}></rect>
      </svg>
    </div>
    )
  }
});

export default BaseGridComponent
