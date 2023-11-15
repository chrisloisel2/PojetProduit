import React, { useState, useEffect } from "react";
import Product from "./Product/Product";
import "./ListProduct.css";
import { Fetcher } from "../../../Service/Fetcher";
import { filterContexte } from "../../App/App";

function ListProduct(props) {
    const { filter, setfilter } = React.useContext(filterContexte);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        Fetcher().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <div id="listProduct">
            <h2>filtree par : {filter}</h2>
            <ul>
                {products
                    .filter((products) => products.type === filter)
                    .map((product) => (
                        <Product product={product} />
                    ))}
            </ul>
        </div>
    );
}

export default ListProduct;
