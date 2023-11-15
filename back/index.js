const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

// Liste de produits
const products = [
    {
        id: 1,
        name: "Produit 1",
        description: "Description du produit 1",
        type: "indispo",
        price: 10,
    },
    {
        id: 2,
        name: "Produit 2",
        description: "Description du produit 2",
        type: "indispo",
        price: 20,
    },
    {
        id: 3,
        name: "Produit 3",
        description: "Description du produit 3",
        type: "indispo",
        price: 30,
    },
    {
        id: 4,
        name: "Produit 4",
        description: "Description du produit 4",
        type: "dispo",
        price: 40,
    },
    {
        id: 5,
        name: "Produit 5",
        description: "Description du produit 5",
        type: "dispo",
        price: 50,
    },
    {
        id: 6,
        name: "Carte cadeau 1",
        description: "babilonne du produit 5",
        type: "dispo",
        price: 50,
    },
];

// Route pour renvoyer la liste de produits
app.get("/products", (req, res) => {
    console.log("GET /products");
    res.send(products);
});

// Démarrage du serveur
app.listen(3050, () => {
    console.log("Serveur démarré sur le port 3000");
});
