import React from 'react'

const Result = (props) => {
    let result
    result = props.data.map( e => {
        return <div key={Object.keys(e)}>{Object.values(e)[0]}</div>
    })
    return result
}

export default Result