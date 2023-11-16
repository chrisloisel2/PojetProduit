import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

function Product(props) {
    const navigate = useNavigate();

    function cliquer() {
        console.log("click");
        navigate("/detailproduct/" + props.product.id, {
            state: { product: props.product },
        });
    }

    return (
        <div id="product" onClick={cliquer}>
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
