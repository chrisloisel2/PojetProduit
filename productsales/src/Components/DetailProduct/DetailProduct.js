import React from "react";
import { useLocation } from "react-router-dom";

function DetailProduct(props) {
    const data = useLocation().state.product;
    return (
        <div>
            <h1>DetailProduct</h1>
            <p>{data.name}</p>
            <p>{data.description}</p>
        </div>
    );
}

export default DetailProduct;
