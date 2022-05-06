import React from "react";
import "./Title.css";

const Title = ({text}) => {
    return(
        <div className="title_container">
           
           
             <label className="title_label"> {text} </label>
        </div>
    )

};

export default Title;