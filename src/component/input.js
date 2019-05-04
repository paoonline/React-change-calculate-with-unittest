import React,{Component} from 'react'
import Result from '../component/result'

class Calculate extends Component {

    state = {
        output : [],
        value:0,
        default_val:0,
        success:null
    }

    componentDidMount(){
        this.setState({success:false})
    }

    onChangevalue  = (e) => {
        let value = e.target.value
        this.setState({value:value, default_val:value})
    }

    onResultval = async () => {
        let change_val
        this.setState({
            output:[]
        })
        if(Math.floor(this.state.value / 100) > 0){
            change_val = await Math.floor(this.state.value / 100)
            this.setState({
                    value: this.state.value - change_val * 100,
                    output: [...this.state.output, {'100d':`Your change is ${change_val} 100 dollar bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / 50) > 0){
            change_val = await Math.floor(this.state.value / 50)
            this.setState({
                    value: this.state.value - change_val * 50,
                    ...this.state.output,
                    output: [...this.state.output, {'50d':`Your change is ${change_val} 50 dollar bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / 20) > 0){
            change_val = await Math.floor(this.state.value / 20)
            this.setState({
                    value: this.state.value - change_val * 20,
                    ...this.state.output,
                    output: [...this.state.output, {'20d':`Your change is ${change_val} 20 dollar bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / 10) > 0){
            change_val = await Math.floor(this.state.value / 10)
            this.setState({
                    value: this.state.value - change_val * 10,
                    ...this.state.output,
                    output: [...this.state.output, {'10d':`Your change is ${change_val} 10 dollar bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / 5) > 0){
            change_val = await Math.floor(this.state.value / 5)
            this.setState({
                    value: this.state.value - change_val * 5,
                    ...this.state.output,
                    output: [...this.state.output, {'5d':`Your change is ${change_val} 5 dollar bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / 1) > 0){
            change_val = await Math.floor(this.state.value / 1)
            this.setState({
                    value: this.state.value - change_val * 1,
                    ...this.state.output,
                    output: [...this.state.output, {'1d':`Your change is ${change_val} 1 dollar bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / .25) > 0){
            change_val = await Math.floor(this.state.value / .25)
            this.setState({
                    value: this.state.value - change_val * .25,
                    ...this.state.output,
                    output: [...this.state.output, {'quarter':`Your change is ${change_val} quarter bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / .10) > 0){
            change_val =  await Math.floor(this.state.value / .10)
            this.setState({
                    value: this.state.value - change_val * .10,
                    ...this.state.output,
                    output: [...this.state.output, {'dime':`Your change is ${change_val} dime bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / .05) > 0){
            change_val = await Math.floor(this.state.value / .05)
            this.setState({
                    value: this.state.value - change_val * .05,
                    ...this.state.output,
                    output: [...this.state.output, {'nickel':`Your change is ${change_val} nickel bill`}]
                }, () => {
            })
        }

        if(Math.floor(this.state.value / .01) > 0){
            change_val = await Math.round(this.state.value / .01)
            this.setState({
                    value: this.state.value - change_val * .01,
                    output: [...this.state.output, {'penny':`Your change is ${change_val} penny bill`}]
                }, () => {
            })
        }

        this.setState({
            value:this.state.default_val, 
            success:true, 
        })
    }

    render(){
        return (
            <>
                <h1>Calculate</h1>
                <input onChange={this.onChangevalue} type="number"/>
                <button onClick={this.onResultval}>Calculate</button>
                {this.state.success === true ? <Result data={this.state.output}/> : null }
            </>
        )
    }
}

export default Calculate