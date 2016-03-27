<BaseLineComponent
            baseLineHeight = {this.state.baseLineHeight}
            baseLineHeightDivision = {this.state.baseLineHeightDivision}
            baseLineHeightOffSet = {this.state.baseLineHeightOffset}
          />

var BaseGridComponent = React.createClass({
  propTypes :  {
      baseUnit : React.PropTypes.number,
      baseDivisions : React.PropTypes.number,
      baseOffSet : React.PropTypes.number
  },
  render : function(){
    var gridStyle = {
      width:'100vw',
      height:'100vh',
      position: 'absolute',
      left: '0',
      top: '0'
    }
    var newDivision = this.props.baseUnit / this.props.baseDivisions ;

    return(
      <div>
      <svg  style={gridStyle}>
        <defs>
          <pattern id="D_Pattern" x="0" y="0" width={newDivision} height={newDivision} patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width={newDivision} height={newDivision} stroke="black" fillOpacity="0.0" strokeWidth="1" strokeDasharray="1,1" strokeOpacity="0.25"/>
          </pattern>
          <pattern id="Pattern" x={this.props.baseOffSet} y="0" width={this.props.baseUnit} height={this.props.baseUnit} patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width={this.props.baseUnit} height={this.props.baseUnit}  stroke="black" fillOpacity="1" strokeWidth="0.5" strokeOpacity="0.25" fill="url(#D_Pattern)"/>
          </pattern>
        </defs>
          <rect  x="0" y="0" width="100%" height="100%" fill="url(#Pattern)" fillOpacity="1"></rect>
      </svg>
      </div>
      )
  }

});


var BaseLineComponent = React.createClass({
 propTypes :  {
      baseLineHeight: React.PropTypes.number,
      baseLineHeightDivision : React.PropTypes.number,
      baseLineHeightOffset : React.PropTypes.number
  },
 render : function() {
  var gridStyle = {
      width:'100vw',
      height:'100vh',
      position: 'absolute',
      left: '0',
      top: '0'
    }
  var newDivision = this.props.baseLineHeight / this.props.baseLineHeightDivision ;
  return (
      <div>
      <svg style={gridStyle}>
        <defs>
          <pattern id="baselinePattern" x="0" y="0" width="100%" height={this.props.baseLineHeight} patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="100%" height={this.props.baseLineHeight}  stroke="blue" fillOpacity="0.0" strokeWidth="0.5" strokeOpacity="1" />
          </pattern>
        </defs>
          <rect  x="0" y="0" width="100%" height="100%" fill="url(#baselinePattern)" ></rect>
      </svg>
      </div>
    )
 }
});
