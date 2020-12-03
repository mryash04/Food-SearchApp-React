import React from "react";

const Receipe = (props) =>{
    return(
        <React.Fragment>
            <div>
                <h2 style={{fontSize:"20px", width:"300px"}}> Title: {props.title}</h2>
                <p> Calories: {props.calories}</p>
                <img src={props.image} alt="food-image" />
            </div>
        </React.Fragment>
    )
}

export default Receipe;