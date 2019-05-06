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
        this.setState({success:false})
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
        let change_val,count_dollar
        this.setState({output:[]})
        if(Math.floor(this.state.value / 100) > 0){
            change_val = await Math.floor(this.state.value / 100)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, 100, {'100d':` ${change_val} 100 dollar bill${count_dollar}`})
        }

        if(Math.floor(this.state.value / 50) > 0){
            change_val = await Math.floor(this.state.value / 50)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, 50, {'50d':` ${change_val} 50 dollar bill${count_dollar}`})
        }

        if(Math.floor(this.state.value / 20) > 0){
            change_val = await Math.floor(this.state.value / 20)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, 20, {'20d':` ${change_val} 20 dollar bill${count_dollar}`})
        }

        if(Math.floor(this.state.value / 10) > 0){
            change_val = await Math.floor(this.state.value / 10)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, 10, {'10d':` ${change_val} 10 dollar bill${count_dollar}`})
        }

        if(Math.floor(this.state.value / 5) > 0){
            change_val = await Math.floor(this.state.value / 5)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, 5, {'5d':` ${change_val} 5 dollar bill${count_dollar}`})  
        }

        if(Math.floor(this.state.value / 1) > 0){
            change_val = await Math.floor(this.state.value / 1)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, 1, {'1d':` ${change_val} 1 dollar bill${count_dollar}`})  
        }

        if(Math.floor(this.state.value / .25) > 0){
            change_val = await Math.floor(this.state.value / .25)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, .25, {'quarter':` ${change_val} quarter${count_dollar}`})  
        }

        if(Math.floor(this.state.value / .10) > 0){
            change_val =  await Math.floor(this.state.value / .10)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, .10, {'dime':` ${change_val} dime${count_dollar}`})  
        }

        if(Math.floor(this.state.value / .05) > 0){
            change_val = await Math.floor(this.state.value / .05)
            count_dollar = change_val > 1 ? count_dollar = 's': ''
            this.newSetStats(change_val, .05, {'nickel':` ${change_val} nickel${count_dollar}`})  
        }

        if(Math.floor(this.state.value / .01) > 0){
            change_val = await Math.round(this.state.value / .01)
            count_dollar = change_val > 1 ? count_dollar = 'pennies': 'penny'
            this.newSetStats(change_val, .01, {'penny':` ${change_val} ${count_dollar}`})  
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