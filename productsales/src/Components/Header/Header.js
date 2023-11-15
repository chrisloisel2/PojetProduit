import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <nav>
                <Link to="/products">Products</Link>
                <Link to="/detailproduct">DetailProduct</Link>
            </nav>
        </header>
    );
}

export default Header;
