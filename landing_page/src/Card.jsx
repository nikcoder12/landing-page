import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
    return (
        <>
            <div className="col-md-3 col-10 mx-auto">
                <div class="card">
                    <img src={props.imgs} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                        <NavLink to="#" class="btn btn-primary">{props.name}</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;