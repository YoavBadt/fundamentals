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
    var windowWidth = this.props.state.windowWidth;
    var colNum = this.props.state.columnNumber;
    var colwidth = this.props.state.columnWidth * this.props.state.baseUnit;
    var gutter1 = this.props.state.gutterWidth * this.props.state.baseUnit;
    var gutterhalf = 0.5 * gutter1;
    
    var colpat = colwidth + gutter1;
    var colpat2 = colwidth +gutterhalf;
    var stage = (colwidth * colNum) + (gutter1 * (colNum-1))
    var position = (windowWidth - stage) / 2
    var fix = position % colpat

    var baseline = this.props.state.baseLineHeight * this.props.state.baseUnit;
    var rowh = this.props.state.rowHeight * this.props.state.baseUnit;
    var rowg = this.props.state.rowGutter * this.props.state.baseUnit;
    var rows = rowh + rowg;
    var rowg2 = rowh + (0.5*rowg);
    var row3 = rows - rowg

    var color = this.props.state.gridColor;
    var visibility = this.props.state.columnVisibility;

    var strokeOpacity = 0.3;
    var fillOpacity = 0.05;
    return(
      <svg  style={style.base}>
        <defs>
          <pattern 
            id="ColumnPattern" 
            x={fix} 
            y="0" 
            width={colpat} 
            height={rows} 
            patternUnits="userSpaceOnUse"
          >
            <rect  
              x="0" 
              y="0" 
              width={colwidth} 
              height="100%" 
              fill={color} 
              fillOpacity={fillOpacity} 
              stroke={color} 
              strokeOpacity="0"
            />
            <line
              strokeWidth="1"
              stroke={color}
              strokeOpacity={strokeOpacity}
              x1="0.5"
              x2="0.5"
              y1="0"
              y2="100%"
              />
              <line
              strokeWidth="1"
              stroke={color}
              strokeOpacity={strokeOpacity}
              x1={colwidth - 0.5}
              x2={colwidth - 0.5}
              y1="0"
              y2="100%"
              />
              <line
              strokeWidth="1"
              stroke={color}
              strokeOpacity={strokeOpacity}
              x1={colpat2 - 0.5}
              x2={colpat2 - 0.5}
              y1="0"
              y2="100%"
              strokeDasharray="1,1"
              />
          </pattern>
        </defs>
        <line
          strokeWidth="1"
          stroke={color}
          strokeOpacity={strokeOpacity}
          x1={position - gutterhalf }
          x2={position - gutterhalf }
          y1="0"
          y2="100%"
          strokeDasharray="1,1"
        />
        <line
          strokeWidth="1"
          stroke={color}
          strokeOpacity={strokeOpacity}
          x1={position - gutter1 }
          x2={position - gutter1 }
          y1="0"
          y2="100%"
        />
        <rect
          x={position}
          y="0"
          width={stage + 1}
          height="100%"
          fill="url(#ColumnPattern)"
          strokeWidth="0"
          stroke="black"
          opacity={visibility}
        />
        <line
          strokeWidth="1"
          stroke={color}
          strokeOpacity={strokeOpacity}
          x1={position + stage + gutterhalf }
          x2={position + stage + gutterhalf }
          y1="0"
          y2="100%"
          strokeDasharray="1,1"
        />
        <line
          strokeWidth="1"
          stroke={color}
          strokeOpacity={strokeOpacity}
          x1={position + stage + gutter1 }
          x2={position + stage + gutter1 }
          y1="0"
          y2="100%"
        />
      </svg>
      )
  }
});

export default ColumnComponent
