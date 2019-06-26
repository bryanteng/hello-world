import React, { Component } from 'react'
import { API_ROOT } from '../constants';


class vode extends Component {

    state={
        vode:{}
    }

    componentDidMount(){
        fetch(`${API_ROOT}/polls/1`)
        .then(res=> res.json())
        .then(res => this.setState({vode: res}))
    }

    render(){
        console.log(this.state.vode)
        return(
            <div>
                <div>vode page</div>
                <div>{this.state.vode.poll_id}</div>
                <div>{this.state.vode.title}</div>
                <div>{this.state.vode.duedate}</div>
                <ul>
                    {this.state.vode.opinions ? Object.keys(this.state.vode.opinions).map(key=>  <li>{key} : {this.state.vode.opinions[key]} </li> ) : null}
                </ul>
            </div>
        )
    }

}

export default vode 