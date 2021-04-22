import { Component } from 'react'
import DataBox from './DataBox'
import Buttons from './Buttons'

class ContentBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            indexVal: 1
        }
        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
    }

    // componentDidUpdate(){
    //     if(this.state.indexVal >= 25){
    //         this.setState({
    //             indexVal: 24
    //         })
    //     }else if(this.state.indexVal < 2){
    //         this.setState({
    //             indexVal: 2
    //         })
    //     }
    // }

    handleIncrease(){
        if(this.state.indexVal >= 25){
            this.setState({
                indexVal: 25
            })
        }else{
            this.setState({
                indexVal: this.state.indexVal + 1
            })
        }
    }

    handleDecrease(){
        if(this.state.indexVal <= 1){
            this.setState({
                indexVal: 1
            })
        }else{
            this.setState({
                indexVal: this.state.indexVal - 1
            })
        }
    }





    render(){
        return(
            <div className="ContentBox">
                <DataBox indexVal={this.state.indexVal}/>
                <Buttons 
                handleIncrease={this.handleIncrease}
                handleDecrease={this.handleDecrease}/>
            </div>
        )
    }
}

export default ContentBox;