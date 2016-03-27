import React from 'react';
import ReactDOM from 'react-dom';
import ControlContainer from './components/controlcontainer';

import Styles from './inlinestyles/inlinestyles';


var App = React.createClass({
  handle : function(message){
    console.log(message)
  }.bind(this),
  changeBaseUnit : function(e){
    var newBaseUnit = ReactDOM.findDOMNode(this.refs.baseUnitControl).value;
    this.setState({baseUnit : newBaseUnit})
  },
  changeBaseUnitDivision : function(e){
    var newDivision = ReactDOM.findDOMNode(this.refs.divisionControl).value;
    this.setState({baseDivisions : newDivision})
  },
  changeBaseUnitOffset: function(e){
    var newBaseUnitOffset = ReactDOM.findDOMNode(this.refs.offsetControl).value;
    this.setState({baseOffSet : newBaseUnitOffset})
  },
  changeBaseFontSize : function(e){
    var newFontSize = ReactDOM.findDOMNode(this.refs.baseFontSizeControl).value;
    this.setState({baseFontSize : newFontSize})
  },
  changeBaseLineHeight : function(e){
    var newBaseLine = ReactDOM.findDOMNode(this.refs.baseLineHeightControl).value;
    this.setState({baseLineHeight : newBaseLine})
    var trial = ReactDOM.findDOMNode(this.refs.textComponent.refs.listsofstuff)
    console.log(trial);
    // trial.style.lineHeight = ""+newBaseLine+"px"
  },
  changeModularScale : function(e){
    var newModularScale = ReactDOM.findDOMNode(this.refs.modularScaleControl).value;
    this.setState({modularScale : newModularScale})
  },
  getInitialState : function(){
    return {
      baseUnit : 24,
      baseDivisions : 4,
      baseOffSet : 12,
      baseVisibilty: 0.25,
      baseFontSize: 16,
      baseLineHeight: 1,
      baseLineHeightDivision : 1,
      baseLineHeightOffset: 0,
      baseLineVisibilty: 0.5,
      modularScale : 1.125,
      columnWidth : 5,
      gutterWidth : 1,
      rowHeight : 5,
      rowGutter : 1,
      gridColor : "skyblue"
    }
  },
  render : function() {
    return (
      <div className="app">
        <div className="content">
          <BaseGridComponent
            baseUnit = {+this.state.baseUnit}
            baseDivisions = {+this.state.baseDivisions}
            baseOffSet ={+this.state.baseOffSet}
            Visibilty = {+this.state.baseVisibilty}
          />
          <ColumnComponent
            baseLineHeight = {+this.state.baseLineHeight}
            baseUnit = {+this.state.baseUnit}
            columnWidth = {+this.state.columnWidth}
            gutterWidth = {+this.state.gutterWidth}
            rowHeight = {+this.state.rowHeight}
            rowGutter = {+this.state.rowGutter}
            gridColor = {this.state.gridColor}
          />
          <BaseLineComponent
            baseLineHeight = {+this.state.baseLineHeight}
            baseLineHeightDivision = {+this.state.baseLineHeightDivision}
            baseLineHeightOffSet = {+this.state.baseLineHeightOffset}
            baseUnit = {+this.state.baseUnit}
            Visibilty = {+this.state.baseLineVisibilty}
          />
          <TextComponent
            baseUnit = {+this.state.baseUnit}
            baseDivisions = {+this.state.baseDivisions}
            baseOffSet ={+this.state.baseOffSet}
            baseFontSize = {+this.state.baseFontSize}
            baseLineHeight = {+this.state.baseLineHeight}
            modularScale = {+this.state.modularScale}
            ref = "textComponent"
            onHandle = {this.handle}
          />
        </div>
        <div className="controls">
          <div style={Styles.controlContainer}>
            <div style={Styles.MainControl}>
              <label>Base Unit : {this.state.baseUnit} Pixels</label>
              <input
              type="range"
              step={2}
              min={4}
              max={100}
              defaultValue={20}
              onChange={this.changeBaseUnit}
              ref="baseUnitControl"
              />
            </div>
            <div style={Styles.SubControl}>
              <div style={Styles.SubControl2}>
                <label>Div</label>
                <input
                  type="number"
                  defaultValue={this.state.baseDivisions}
                  step={1} min={1}
                  max={4}
                  onChange={this.changeBaseUnitDivision}
                  ref="divisionControl"
                  style ={Styles.SubInput}
                  />
              </div>
              <div style={Styles.SubControl2}>
                <label>Offset</label>
                <input
                  type="number"
                  defaultValue={0}
                  step={1}
                  min={0}
                  max={this.state.baseUnit}
                  onChange={this.changeBaseUnitOffset}
                  ref="offsetControl"
                  style ={Styles.SubInput}
                  />
              </div>
              <div style={Styles.SubControl2}>
                <button style={{width: 20, height:20}}
                        ref="showHideGrid"
                  >v</button>
              </div>
            </div>
          </div>
          <div className="controlContainer">
            <label>Base Line Height : {this.state.baseLineHeight} units</label>
            <input
              type="range"
              min={1}
              max={4}
              step={0.5}
              defaultValue={this.state.baseLineHeight}
              onChange={this.changeBaseLineHeight}
              ref="baseLineHeightControl"
              />
              <label style={{fontSize: 12}}>( {this.state.baseLineHeight * this.state.baseUnit} Pixels )</label>
          </div>
          <div className="controlContainer">
            <label>Base Font Size : {this.state.baseFontSize}</label>
            <input
              type="range"
              min={12}
              max={48}
              step={1}
              defaultValue={16}
              onChange={this.changeBaseFontSize}
              ref="baseFontSizeControl"
               />
          </div>
          
          <div className="controlContainer">
            <input
              type="range"
              min={1.001}
              max={2}
              step={0.001}
              defaultValue={1.125}
              onChange={this.changeModularScale}
              ref="modularScaleControl"
              />
            <label>Modular Scale : {this.state.modularScale}</label>
          </div>
        </div>
      {/* end of return */}
      </div>
    )
  }
});
//end of main component

var TextComponent = React.createClass({
  getInitialState : function(){
    return {
      width : 10,
      height :10
    }
  },
  method1 : function(e){
    var something = ReactDOM.findDOMNode(this.refs.listsofstuff);
    this.setState( {width : this.props.baseUnit})
    console.log(this.state);
  },
  handle : function(e){
    this.props.onHandle("I am from sub");
    console.log("I am in Sub")
  },
  getDefaultProps: function () {
    return {
    }
  },
  propTypes :  {
      baseUnit : React.PropTypes.number,
      baseDivisions : React.PropTypes.number,
      baseOffSet : React.PropTypes.number,
      baseFontSize: React.PropTypes.number,
      baseLineHeight: React.PropTypes.number,
      modularScale : React.PropTypes.number,
      onHandle : React.PropTypes.func
  },
  render : function() {
    
    var divStyle = {
      outline : '1px solid blue',
      fontSize : 25,
      top: 20 ,
      margin:0,
      right: 20,
      position: 'absolute',
      background: 'white'
      }
      return (
        <div>
          <ul style={divStyle} ref="listsofstuff">
          <button onClick={this.handle}>button</button>
            <li>baseUnit = {this.props.baseUnit}</li>
            <li>baseDivisions = {this.props.baseDivisions}</li>
            <li>baseOffSet ={this.props.baseOffSet}</li>
            <li>baseFontSize = {this.props.baseFontSize}</li>
            <li>baseLineHeight = {this.props.baseLineHeight}</li>
            <li>modularScale = {this.props.modularScale}</li>
            <li>{this.props.baseUnit}</li>
          </ul>
        </div>
      )
  }
});
var ColumnComponent = React.createClass({
  propTypes :  {
      baseUnit : React.PropTypes.number,
      columnwidth : React.PropTypes.number,
      gutterWidth : React.PropTypes.number,
      baseLineHeight : React.PropTypes.number,
      rowHeight : React.PropTypes.number,
      rowGutter : React.PropTypes.number,
      gridColor : React.PropTypes.string
  },
  render : function(){
    var gridStyle = {
      width:'100vw',
      height:'100vh',
      position: 'absolute',
      left: '0',
      top: '0'
    }
    var colwidth1 = this.props.columnWidth * this.props.baseUnit;
    var gutter1 = this.props.gutterWidth * this.props.baseUnit;
    var gutterhalf = 0.5 * gutter1;
    var colpat = colwidth1 + gutter1;
    var colpat2 = colwidth1 +gutterhalf;
    var wrapper = (colwidth1 * 12) + (gutter1 * 11)
    var wrappos = (1920 - wrapper) / 2
    var fix = wrappos % colpat

    var baseline = this.props.baseLineHeight * this.props.baseUnit;
    var rowh = this.props.rowHeight * this.props.baseUnit;
    var rowg = this.props.rowGutter * this.props.baseUnit;
    var rows = rowh + rowg;
    var rowg2 = rowh + (0.5*rowg);

    var color = this.props.gridColor;
    return(
      <svg  style={gridStyle}>
        <defs>
          <pattern id="Pattern" x={fix} y="0" width={colpat} height={rows} patternUnits="userSpaceOnUse" >
            <rect  x="0" y="0" width={colwidth1} height={colpat} fill={color} fillOpacity="0.1" stroke={color} strokeOpacity="0" />
            <rect  x={colwidth1} y="0" width={gutterhalf} height="100%" fillOpacity="0" stroke={color} strokeOpacity="0"/>
            <rect  x={colwidth1 + gutterhalf} y="0" width={gutterhalf} height="100%" fillOpacity="0" stroke={color} strokeOpacity="0" />
            <line strokeWidth="1" stroke={color} strokeOpacity="1" x1="0" x2="0" y1="0" y2={rows} />
            <line strokeWidth="0.5" stroke={color} strokeOpacity="1" x1={colwidth1} x2={colwidth1} y1="0" y2={rows} />
            <line strokeWidth="0.5" stroke={color} strokeOpacity="1" x1={colpat2} x2={colpat2} y1="0" y2={rows} />
            <line strokeWidth="0.5" stroke={color} strokeOpacity="1" x1="0" x2={colpat} y1={rowh} y2={rowh} />
            <line strokeWidth="0.5" stroke={color} strokeOpacity="1" x1="0" x2={colpat} y1={rowg2} y2={rowg2} />
            <line strokeWidth="1" stroke={color} strokeOpacity="1" x1="0" x2={colpat} y1={rows} y2={rows} />

          </pattern>
        </defs>
        <rect  x={wrappos} y="0" width={wrapper} height="100%" fill="url(#Pattern)" strokeWidth="0" stroke="black"></rect>
      </svg>
      )
  }
});

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
    var offset = this.props.baseOffSet;
    var visibilty = this.props.Visibilty;
    var baseUnit = this.props.baseUnit;
    var divisions = this.props.baseDivisions;
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
          <rect  x="0" y="0" width="100%" height="100%" fill="url(#Pattern)" fillOpacity={visibilty}></rect>
      </svg>
      </div>
      )
  }
});

var BaseLineComponent = React.createClass({
 propTypes :  {
      baseLineHeight: React.PropTypes.number,
      baseLineHeightDivision : React.PropTypes.number,
      baseLineHeightOffset : React.PropTypes.number,
      baseUnit : React.PropTypes.number,
      Visibilty : React.PropTypes.number
  },
 render : function() {
  var gridStyle = {
      width:'100vw',
      height:'100vh',
      position: 'absolute',
      left: '0',
      top: '0'
    }
    var baseLineHeight = this.props.baseLineHeight * this.props.baseUnit;
    var visibilty = this.props.Visibilty;
    var div = baseLineHeight / this.props.baseLineHeightDivision ;
    
  return (
      <div>
      <svg style={gridStyle}>
        <defs>
          <pattern id="Division" x="0" y="0" width="100%" height={div} patternUnits="userSpaceOnUse">
            <line strokeWidth="1" stroke="blue" strokeOpacity="1" x1="0" x2="100%" y1={div} y2={div} strokeDasharray="1,1"/>
          </pattern>
          <pattern id="baselinePattern" x="0" y="0" width="100%" height={baseLineHeight} patternUnits="userSpaceOnUse">
          <line strokeWidth="1" stroke="blue" strokeOpacity="1" x1="0" x2="100%" y1={baseLineHeight} y2={baseLineHeight} />
            <rect x="0" y="0" width="100%" height={baseLineHeight} fillOpacity="1"  strokeOpacity="0" fill="url(#Division)"/>
          </pattern>
        </defs>
          <rect  x="0" y="0" width="100%" height="100%" fill="url(#baselinePattern)" fillOpacity={visibilty}></rect>
      </svg>
      </div>
    )
 }
});






ReactDOM.render(
  <App />,
  document.getElementById('app')
);

