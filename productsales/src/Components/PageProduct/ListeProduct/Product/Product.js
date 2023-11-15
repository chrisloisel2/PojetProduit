import React from "react";
import "./Products.css";

function Product(props) {
    return (
        <div id="product">
            <li key={props.product.id}>
                <h3>{props.product.name}</h3>
                <p>{props.product.description}</p>
                <p>Prix : {props.product.price} €</p>
                <p>Disponibilité : {props.product.type}</p>
            </li>
        </div>
    );
}

export default Product;
