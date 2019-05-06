import React from 'react'

const Result = (props) => {
    let result
    result = props.data.map( e => {
        return Object.values(e)[0]
    })
    return <div>{'Your change is' + result.concat().toString()}</div>
}

export default Result