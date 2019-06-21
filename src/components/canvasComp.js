import React, { Component } from 'react'
import {SketchField, Tools} from 'react-sketch';

export default class canvasComp extends Component{
  state={
    width: '1024px', 
    height: '768px', 
    tool: Tools.Pencil, 
    lineColor:'#E27300',
    lineWidth: 3,
    showTools: false,
    showColors: false
  }

  componentDidMount(){
    this.setState({width: window.innerWidth, height: window.innerHeight})
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

  handleColorClick = (event) =>{
    this.setState({ lineColor: event.target.id })
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
        <div>
          <button onClick={this.handleColorClick} id="red">red</button>
          <button onClick={this.handleColorClick} id="orange">orange</button>
          <button onClick={this.handleColorClick} id="yellow">yellow</button>
          <button onClick={this.handleColorClick} id="green">green</button>
          <button onClick={this.handleColorClick} id="blue">blue</button>
          <button onClick={this.handleColorClick} id="indigo">indigo</button>
          <button onClick={this.handleColorClick} id="violet">violet</button>
        </div> 
        : null}
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
        <input type="range" min="1" max="10" value={this.state.lineWidth} onChange={this.handleChange} id="lineWidth"/><label>{this.state.lineWidth}</label>

      </div>
    )
  }
}
