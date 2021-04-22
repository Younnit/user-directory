import React from 'react'
import NavBar from './NavBar'
import ContentBox from './ContentBox'

function OuterBox (){
    return (
        <div className="Box">
            <NavBar />
            <ContentBox />
        </div>
    )
};

export default OuterBox;