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
    showColors: false,
    showBackgroundColors: false,
    backgroundColor: '#faebd7'
  }

    // componentDidMount(){
    //   this.setState({width: window.innerWidth, height: window.innerHeight})
    //   console.log(SketchPicker)
    // }

  handleChange = (event) =>{
    this.setState({ [event.target.id]: event.target.value})
  }

  handleClick = (event) =>{
    this.setState({ tool: event.target.id })
  }

  changeColor = (event,state) =>{
    this.setState({[state]: event.hex})
  }

  toggleShow = (event,state) =>{
    this.setState({[event.target.id]: !state})
  }
  
  render(){
    return(
      <div>
        <SketchField className="CanvasComp" width= {this.state.width} 
        height= {this.state.height} 
        tool={this.state.tool} 
        lineColor={this.state.lineColor}
        lineWidth={this.state.lineWidth}
        backgroundColor={this.state.backgroundColor}
        undoSteps={1}/>
        <label>width:</label>
        <input type="text" value={this.state.width} id="width" onChange={this.handleChange} ></input>
        <label>height:</label>
        <input type="text" value={this.state.height} id="height" onChange={this.handleChange} ></input>
        <label onClick={(event)=>this.toggleShow(event,this.state.showBackgroundColors)} id="showBackgroundColors">backgroundColor:</label>
        {this.state.showBackgroundColors ? 
        <SketchPicker 
          color={this.state.backgroundColor}
          onChange={(event)=>this.changeColor(event,"backgroundColor")}/>
          :null}
        <br/>
        <label onClick={(event)=>this.toggleShow(event,this.state.showColors)} id="showColors">{this.state.showColors ? "Hide color picker" : "Show color picker"}</label>
        <span className="dot" style={{backgroundColor: this.state.lineColor ? this.state.lineColor : null, height: this.state.lineWidth < 10 ? 10 : `${this.state.lineWidth}px`, width: this.state.lineWidth < 10 ? 10 : `${this.state.lineWidth}px`}}></span>
        {this.state.showColors ? 
          <SketchPicker 
          color={this.state.lineColor}
          onChange={(event)=>this.changeColor(event,"lineColor")}/>
          : null }
        <br/>
        <label onClick={(event)=>this.toggleShow(event,this.state.showTools)} id="showTools">{this.state.showTools ? "Click to hide tools" : "Click to show Tools"}</label>
        {this.state.showTools ? 
        <div>
          {["pencil","rectangle","circle","line","pan","select"].map(tool=><button onClick={this.handleClick} id={tool}>{tool}</button>)}
        </div> 
        : null}
        <br/>
        <label>Pencil Size</label>
        <input type="range" min="1" max="20" value={this.state.lineWidth} onChange={this.handleChange} id="lineWidth"/><label>{this.state.lineWidth}</label>

      </div>
    )
  }
}
