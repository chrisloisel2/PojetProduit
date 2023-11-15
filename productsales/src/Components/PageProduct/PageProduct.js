import React from "react";
import ListProduct from "./ListeProduct/ListProduct";
import "./PageProduct.css";

function PageProduct() {
    return (
        <div id="pageProduct">
            <h1>Liste de produit</h1>
            <ListProduct />
        </div>
    );
}

export default PageProduct;
