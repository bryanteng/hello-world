import React, { Component } from 'react'
import {SketchField, Tools} from 'react-sketch';

export default class canvasComp extends Component{
  state={
    width: '1024px', 
    height: '768px', 
    tool: Tools.Pencil, 
    lineColor:'black',
    lineWidth: 3
  }

  handleChange = (event) =>{
    this.setState({ [event.target.id]: event.target.value})
  }

  
  render(){
    return(
      <div>
        <SketchField width='1024px' 
        height='768px' 
        tool={Tools.Pencil} 
        lineColor={this.state.lineColor}
        lineWidth={3}/>
        <label>width:</label>
        <input type="text" value={this.state.width} id="width" onChange={this.handleChange} ></input>
        <label>color:</label>
        <input type="text" value={this.state.lineColor} id="lineColor" onChange={this.handleChange} ></input>
      </div>
    )
  }
}
