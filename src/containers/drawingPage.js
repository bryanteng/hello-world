import React, { Component } from 'react'
import CanvasComp from '../components/canvasComp'

class drawingPage extends Component{
    render(){
        return(
            <div>
                <div>draw on me</div>
                <CanvasComp/>
            </div>
        )
    }
}

export default drawingPage