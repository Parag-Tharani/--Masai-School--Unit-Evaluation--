import React from "react";

export function ProductDisplay({id, title, gender, price, category, image, HandleDelete}){
    return (
        <div>
            <div><img src={image}/></div>
            <div>
                <h2>{ title }</h2>
                <p>Gender : {gender} </p>
                <p>Category: {category}</p>
                <h4>Price: ₹{price}</h4>
                <button onClick={() => HandleDelete(id)}>Delete Item</button>
            </div>
        </div>
    )
}