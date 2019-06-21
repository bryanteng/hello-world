import React, { Component } from 'react'
import {SketchField, Tools} from 'react-sketch';
import { SketchPicker } from 'react-color'

export default class canvasComp extends Component{
  state={
    width: '1024px', 
    height: '768px', 
    tool: Tools.Pencil, 
    lineColor:'#000000',
    lineWidth: 3,
    showTools: false,
    showColors: false
  }

  componentDidMount(){
    this.setState({width: window.innerWidth, height: window.innerHeight})
    console.log(SketchPicker)
  }

  handleChange = (event) =>{
    this.setState({ [event.target.id]: event.target.value})
  }

  handleClick = (event) =>{
    this.setState({ tool: event.target.id })
  }

  handleShowTools = () =>{
    this.setState({showTools: !this.state.showTools})
  }

  handleShowColors = () =>{
    this.setState({showColors: !this.state.showColors})
  }

  changeColor =(event)=>{
    this.setState({lineColor: event.hex})
  }
  
  render(){
    return(
      <div>
        <SketchField className="CanvasComp" width= {this.state.width} 
        height= {this.state.height} 
        tool={this.state.tool} 
        lineColor={this.state.lineColor}
        lineWidth={this.state.lineWidth}
        undoSteps={1}/>
        <label>width:</label>
        <input type="text" value={this.state.width} id="width" onChange={this.handleChange} ></input>
        <label>height:</label>
        <input type="text" value={this.state.height} id="height" onChange={this.handleChange} ></input>
        <br/>
        <label onClick={this.handleShowColors}>{this.state.showColors ? "Click to hide colors" : "Click to show colors"}</label>
        {this.state.showColors ? 
          <SketchPicker 
          color={this.state.lineColor}
          onChange={this.changeColor}/>
          : null }
        <br/>
        <label onClick={this.handleShowTools}>{this.state.showTools ? "Click to hide tools" : "Click to show Tools"}</label>
        {this.state.showTools ? 
        <div>
          <button onClick={this.handleClick} id="pencil">pencil</button>
          <button onClick={this.handleClick} id="rectangle">rectangle</button>
          <button onClick={this.handleClick} id="circle">circle</button>
          <button onClick={this.handleClick} id="line">line</button>
          <button onClick={this.handleClick} id="pan">pan</button>
          <button onClick={this.handleClick} id="select">select</button>
        </div> 
        : null}
        <br/>
        <label>Pencil Size</label>
        <input type="range" min="1" max="20" value={this.state.lineWidth} onChange={this.handleChange} id="lineWidth"/><label>{this.state.lineWidth}</label>

      </div>
    )
  }
}
