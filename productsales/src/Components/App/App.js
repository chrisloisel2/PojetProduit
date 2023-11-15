// importation du composent Footer depuis sont fichier
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageProduct from "../PageProduct/PageProduct";
import DetailProduct from "../DetailProduct/DetailProduct";
import Side from "../Side/Side";

const filterContexte = React.createContext();

function App() {
    const [filter, setFilter] = React.useState("dispo");

    return (
        <div className="App">
            <filterContexte.Provider value={{ filter, setFilter }}>
                <Router>
                    <Header titre="Yolo" />
                    <Side title="Filtrage" />
                    <Routes>
                        <Route path="/products" element={<PageProduct />} />
                        <Route
                            path="/detailproduct"
                            element={<DetailProduct />}
                        />
                    </Routes>
                </Router>
                <Footer />
            </filterContexte.Provider>
        </div>
    );
}

export { filterContexte };
export default App;
