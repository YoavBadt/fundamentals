import React from 'react';

class New extends React.Component {
  constructor(){
    super();
    this.dosomething = this.dosomething.bind(this);
  }
  dosomething(){
    alert(this.props.children);
  }
  render(){
    return <div>
      <div>
      <h1>{this.props.user}</h1>
      <p>{this.props.children}</p>
      <a onClick={this.dosomething} href="#">click</a>
      </div>
    </div>
  }
}


export default New
