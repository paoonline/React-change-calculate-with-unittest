import React,{Component} from 'react'
import Result from './result'

class Calculate extends Component {
    state = {
        output : [],
        value:0,
        default_val:0,
        success:null
    }

    componentDidMount(){
        this.setState({success:false, output:[]})
    }

    onChangevalue  = (e) => {
        let value = e.target.value
        this.setState({value:value, default_val:value})
    }

    newSetStats(change_val, dollar, key){
        this.setState({
            value: this.state.value - change_val * dollar,
            ...this.state.output,
            output: [...this.state.output, key]
            }, () => {
        })
    }

    onResultval = async () => {
        let change_val
        this.setState({output:[]})
        if(Math.floor(this.state.value / 100) > 0){
            change_val = await Math.floor(this.state.value / 100)
            this.newSetStats(change_val, 100, {'100d':`Your change is ${change_val} 100 dollar bill`})
        }

        if(Math.floor(this.state.value / 50) > 0){
            change_val = await Math.floor(this.state.value / 50)
            this.newSetStats(change_val, 50, {'50d':`Your change is ${change_val} 50 dollar bill`})
        }

        if(Math.floor(this.state.value / 20) > 0){
            change_val = await Math.floor(this.state.value / 20)
            this.newSetStats(change_val, 20, {'20d':`Your change is ${change_val} 20 dollar bill`})
        }

        if(Math.floor(this.state.value / 10) > 0){
            change_val = await Math.floor(this.state.value / 10)
            this.newSetStats(change_val, 10, {'10d':`Your change is ${change_val} 10 dollar bill`})
        }

        if(Math.floor(this.state.value / 5) > 0){
            change_val = await Math.floor(this.state.value / 5)
            this.newSetStats(change_val, 5, {'5d':`Your change is ${change_val} 5 dollar bill`})  
        }

        if(Math.floor(this.state.value / 1) > 0){
            change_val = await Math.floor(this.state.value / 1)
            this.newSetStats(change_val, 1, {'1d':`Your change is ${change_val} 1 dollar bill`})  
        }

        if(Math.floor(this.state.value / .25) > 0){
            change_val = await Math.floor(this.state.value / .25)
            this.newSetStats(change_val, .25, {'quarter':`Your change is ${change_val} quarter bill`})  
        }

        if(Math.floor(this.state.value / .10) > 0){
            change_val =  await Math.floor(this.state.value / .10)
            this.newSetStats(change_val, .10, {'dime':`Your change is ${change_val} dime bill`})  
        }

        if(Math.floor(this.state.value / .05) > 0){
            change_val = await Math.floor(this.state.value / .05)
            this.newSetStats(change_val, .05, {'nickel':`Your change is ${change_val} nickel bill`})  
        }

        if(Math.floor(this.state.value / .01) > 0){
            change_val = await Math.round(this.state.value / .01)
            this.newSetStats(change_val, .01, {'penny':`Your change is ${change_val} penny bill`})  
        }
        this.setState({
            value:this.state.default_val, 
            success:true, 
        })
    }

    render(){
        return (
            <>
                <h1>Change calculator</h1>
                <input onChange={this.onChangevalue} type="number"/>
                <button onClick={this.onResultval} style={{marginLeft:10, marginBottom:10}}>Calculate</button>
                {this.state.success === true ? <Result data={this.state.output}/> : null }
            </>
        )
    }
}

export default Calculate