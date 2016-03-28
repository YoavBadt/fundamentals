import React from 'react';
import ReactDOM from 'react-dom';
// import App from 'app';
var LinkedStateMixin = require('react-addons-linked-state-mixin');

import Grids from './components/grids'
// import Controls from './components/controls.js'
import TextComponent from './components/content/textcomponent'
import Card from './components/card'

import BaseUnit from './components/baseUnit'
import BaseLine from './components/baseline'
import Column from './components/column'
import BaseFontSize from './components/basefontsize'
import ModularScale from './components/modularscale'


var App = React.createClass({
  mixins : [LinkedStateMixin],
  modScale : function(){

  },
  componentWillMount : function(){
    var modularscale = this.state.scaleFactor
    var baseFontSize = this.state.baseFontSize
    var modScale = [
      Math.floor(baseFontSize * 1),
      Math.floor(baseFontSize * modularscale),
      Math.floor(baseFontSize * Math.pow(modularscale,2)),
      Math.floor(baseFontSize * Math.pow(modularscale,3)),
      Math.floor(baseFontSize * Math.pow(modularscale,4)),
      Math.floor(baseFontSize * Math.pow(modularscale,5)),
      Math.floor(baseFontSize * Math.pow(modularscale,6)),
      ];
    this.setState({modScale : modScale})
  },
  getInitialState : function(){
    return {
      baseUnit : 20,
      baseDivisions : 1,
      baseOffSet : 10,
      baseVisibility: 1,
      baseFontSize: 16,
      baseLineHeight: 1,
      baseLineHeightPx: 20,
      baseLineHeightDivision : 1,
      baseLineHeightOffset: 0,
      baseLineVisibility: 1,
      baselineColor: 'blue',
      scaleFactor : 1.2,
      modScale : [1,2,3,4,5,6],
      columnNumber : 12,
      columnWidth : 5,
      gutterWidth : 1,
      columnVisibility : 1,
      rowHeight : 5,
      rowGutter : 1,
      gridColor : "red",
      typography : {
        h1 : {
          fontSize : 60,
          lineHeight: 40
        }
      }
      }
  },
  render : function() {
    return (
      <div className="app">
        <div className="content">
          <Grids state={this.state}/>
          <TextComponent state={this.state}/>
          <Card state={this.state}/>
        </div>
        <div className="controls">
          <BaseUnit
            name="Base Unit"
            valueLink={this.linkState('baseUnit')}
            valueLink2={this.linkState('baseDivisions')}
            valueLink3={this.linkState('baseVisibility')}
            valueLink4={this.linkState('baseOffSet')}
            state={this.state}
          />
          <BaseLine
            name="Base Line Height"
            valueLink={this.linkState('baseLineHeight')}
            valueLink2={this.linkState('baseLineHeightDivision')}
            valueLink3={this.linkState('baseLineVisibility')}
            state={this.state}
          />
          <BaseFontSize
            name="Base Font Size"
            valueLink={this.linkState('baseFontSize')}
            state={this.state}
          />
          <ModularScale
            name="Modular Scale"
            valueLink={this.linkState('scaleFactor')}
            state={this.state}
            onChange={this.onChange}
          />
          <Column
            name="Column width"
            valueLink={this.linkState('columnWidth')}
            valueLink2={this.linkState('gutterWidth')}
            valueLink3={this.linkState('rowHeight')}
            valueLink4={this.linkState('rowGutter')}
            valueLink5={this.linkState('columnVisibility')}
            state={this.state}
          />
        </div>
      {/* end of return */}
      </div>
    )
  }
});
//end of main component



ReactDOM.render(
  <App />,
  document.getElementById('app')
);

