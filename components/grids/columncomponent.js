import React from 'react';

var ColumnComponent = React.createClass({
  propTypes :  {
      baseUnit : React.PropTypes.number,
      columnwidth : React.PropTypes.number,
      gutterWidth : React.PropTypes.number,
      baseLineHeight : React.PropTypes.number,
      rowHeight : React.PropTypes.number,
      rowGutter : React.PropTypes.number,
      gridColor : React.PropTypes.string,
      visibility : React.PropTypes.number
  },
  render : function(){
    var style = {
      base: {
        width:'100vw',
        height:'100vh',
        position: 'absolute',
        left: '0',
        top: '0'
      }
    }
    var colwidth1 = this.props.state.columnWidth * this.props.state.baseUnit;
    var gutter1 = this.props.state.gutterWidth * this.props.state.baseUnit;
    var gutterhalf = 0.5 * gutter1;
    var colpat = colwidth1 + gutter1;
    var colpat2 = colwidth1 +gutterhalf;
    var wrapper = (colwidth1 * 12) + (gutter1 * 11)
    var wrappos = (1920 - wrapper) / 2
    var fix = wrappos % colpat

    var baseline = this.props.state.baseLineHeight * this.props.state.baseUnit;
    var rowh = this.props.state.rowHeight * this.props.state.baseUnit;
    var rowg = this.props.state.rowGutter * this.props.state.baseUnit;
    var rows = rowh + rowg;
    var rowg2 = rowh + (0.5*rowg);
    var row3 = rows - rowg

    var color = this.props.state.gridColor;
    var visibility = this.props.state.columnVisibility;
    return(
      <svg  style={style.base}>
        <defs>
          <pattern id="Pattern3" x={fix} y="0" width={colpat} height={rows} patternUnits="userSpaceOnUse" >
            <rect  x="0" y="0" width={colwidth1} height={row3} fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0" />
            <rect  x={colwidth1} y="0" width={gutterhalf} height="100%" fillOpacity="0" stroke={color} strokeOpacity="0"/>
            <rect  x={colwidth1 + gutterhalf} y="0" width={gutterhalf} height="100%" fillOpacity="0" stroke={color} strokeOpacity="0" />
            <line strokeWidth="1" stroke={color} strokeOpacity="1" x1="0" x2="0" y1="0" y2={rows} />
            <line strokeWidth="0.5" stroke={color} strokeOpacity="1" x1={colwidth1} x2={colwidth1} y1="0" y2={rows} />
            <line strokeWidth="0.5" stroke={color} strokeOpacity="1" x1={colpat2} x2={colpat2} y1="0" y2={rows} strokeDasharray="1,1"/>
            <line strokeWidth="0.5" stroke={color} strokeOpacity="1" x1="0" x2={colpat} y1={rowh} y2={rowh} />
            <line strokeWidth="0.5" stroke={color} strokeOpacity="1" x1="0" x2={colpat} y1={rowg2} y2={rowg2} strokeDasharray="1,1"/>
            <line strokeWidth="1" stroke={color} strokeOpacity="1" x1="0" x2={colpat} y1={rows} y2={rows} />
          </pattern>
        </defs>
        <rect  x={wrappos} y="0" width={wrapper} height="100%" fill="url(#Pattern3)" strokeWidth="0" stroke="black" opacity={visibility}></rect>
      </svg>
      )
  }
});

export default ColumnComponent
