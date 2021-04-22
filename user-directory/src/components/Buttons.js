import React from 'react'

function Buttons(props){
    return(
        <div className="Buttons">
            <button onClick={props.handleDecrease}>{'<'} Previous</button>
            <button onClick={props.handleIncrease}>Next {'>'}</button>
        </div>
    )
}

export default Buttons;