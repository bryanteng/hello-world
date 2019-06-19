import React, { Component} from 'react'
import Carousel from '../components/carousel'
import '../App.css'

class carousels extends Component{
    state={
        carousels:[]
    }

    addCarousel =()=>{
        this.setState({carousels: [...this.state.carousels, <Carousel/>]})
    }

    render(){
        return(
            <div>
                <button onClick={this.addCarousel}>Add a carousel</button>
                <div className="myCarousels">
                    {this.state.carousels ? this.state.carousels.map((carousel,index) => <div className="carousel" id={index}>{carousel} </div>) : null}
                </div>
            </div>
        )
    }
}

export default carousels