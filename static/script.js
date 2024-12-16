// Ce fichier gère les interactions dynamiques du frontend : récupération des produits


const fetchProducts = async () => {
    try {
        const response = await fetch('/products'); // Appelle la route backend
        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);
        const products = await response.json(); // Récupère les produits
        displayProducts(products); // Affiche les produits
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
    }
};


const displayProducts = (products) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product">
            <h2>${product.name}</h2>
            <p>${(product.price / 100).toFixed(2)} €</p>
            <button onclick="buyProduct(${product.id})">Acheter</button>
        </div>
    `).join(''); // Génère les cartes produits
};


// Fonction simulée pour gérer l'achat d'un produit
const buyProduct = (productId) => {
    alert(`Produit avec ID ${productId} sélectionné pour achat.`);
};


// Lance la récupération et l'affichage des produits au chargement de la page
document.addEventListener('DOMContentLoaded', fetchProducts);


