import React from 'react'

const Result = (props) => {
    let result
    if(props.data.length > 0){
        result = props.data.map( e => {
            return Object.values(e)[0]
        })    
    }else{
        result = ' cannot change 0'
    }
    return <div>{'Your change is' + result.concat().toString()}</div>
}

export default Result