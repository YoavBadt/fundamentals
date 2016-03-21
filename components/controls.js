import React from 'react';
import ReactDOM from 'react-dom';

// import NumInput from './components/controls/numinput';

class Controls extends React.Component {
  constructor(){
    super();
    this.state = {
      BaseGridUnit : '24',
      BaseFontSize : '16',
      BaseLineHeight : '24',
      ModScale: '1.125',
      ColScale: '5',
      GutterSize: '1'
     }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      BaseGridUnit: ReactDOM.findDOMNode(this.refs.BaseGridUnit.refs.inp).value,
      BaseFontSize: ReactDOM.findDOMNode(this.refs.BaseFontSize.refs.inp).value,
      BaseLineHeight: ReactDOM.findDOMNode(this.refs.BaseLineHeight.refs.inp).value,
      ModScale: ReactDOM.findDOMNode(this.refs.ModScale.refs.inp).value,
      ColScale: ReactDOM.findDOMNode(this.refs.ColScale.refs.inp).value,
      GutterSize: ReactDOM.findDOMNode(this.refs.GutterSize.refs.inp).value

    })
  }
  render(){
    return (
        <div className="controls">
        <div className="title">Settings</div>
        <NumInput
          ref="BaseGridUnit"
          min={14}
          max={48}
          step={2}
          val={+this.state.BaseGridUnit}
          type="range"
          label="Base GridUnit"
          update ={this.update} />
          <NumInput
          ref="BaseFontSize"
          min={14}
          max={48}
          step={1}
          val={+this.state.BaseFontSize}
          type="range"
          label="Base FontSize"
          update ={this.update} />
          <NumInput
          ref="BaseLineHeight"
          min={14}
          max={48}
          step={2}
          val={+this.state.BaseLineHeight}
          type="range"
          label="Base LineHeight"
          update ={this.update} />
          <NumInput
          ref="ModScale"
          min={1.001}
          max={1.999}
          step={0.001}
          val={+this.state.ModScale}
          type="range"
          label="Font ModScale"
          update ={this.update} />
          <NumInput
          ref="ColScale"
          min={1}
          max={10}
          step={0.5}
          val={+this.state.ColScale}
          type="range"
          label="Column width by scale"
          update ={this.update} />
          <NumInput
          ref="GutterSize"
          min={0.5}
          max={2}
          step={0.5}
          val={+this.state.GutterSize}
          type="range"
          label="Gutter width by scale"
          update ={this.update} />
          </div>
      );
  } 
}
class NumInput extends React.Component {
  render(){
    let label = this.props.label !== '' ?
    <label>{this.props.label} : {this.props.val}</label> : ''
    return (
      <div className="controlContainer">
      {label}
      <input ref="inp"
        type={this.props.type}
        min={this.props.min}
        max={this.props.max}
        step={this.props.step}
        defaultValue={this.props.val}
        onChange={this.props.update} />
      </div>
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default Controls
