import React, { Component} from 'react'

class carousel extends Component{

    state={
        index: 0,
        alphabet:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    }

    onDownClick=()=>{
        let temp = this.state.index+1
        if(temp === 26) temp = 0
        this.setState({index: temp})
    }

    onUpClick=()=>{
        let temp = this.state.index-1
        if(temp === -1) temp = 25
        this.setState({index: temp})
    }

    render(){
        return (
            <div>
            <button onClick={this.onUpClick}>^</button>
                    <h1 className="previous">   {this.state.alphabet[this.state.index-1 === -1 ? 25 : this.state.index-1 ]}</h1>
                    <h1 className="current"> > {this.state.alphabet[this.state.index]}</h1>
                    <h1 className="after">   {this.state.alphabet[this.state.index+1 === 26 ? 0 : this.state.index+1 ]}</h1>
                <button onClick={this.onDownClick}>v</button>
            </div>
        )
    }
}

export default carousel
