import React from "react";
import "./Side.css";
import { filterContexte } from "../App/App";

function Side(props) {
    const { filter, setFilter } = React.useContext(filterContexte);
    console.log(filter);
    return (
        <div className="side">
            <h2>{props.title}</h2>
            <button onClick={() => setFilter("dispo")}>Disponible</button>
            <button onClick={() => setFilter("indispo")}>Indisponible</button>
        </div>
    );
}

export default Side;
