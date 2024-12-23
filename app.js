document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://localhost:3000/products";
    const productsList = document.getElementById("products-list");
    const productDetails = document.getElementById("product-details");
    const searchBar = document.getElementById("search-bar");
    const clearSearchButton = document.getElementById("clear-search");
    const categoryFilter = document.getElementById("category-filter");
    const cartList = document.getElementById("cart-list");
    const checkoutBtn = document.getElementById("checkout-btn");
    const toggleThemeButton = document.getElementById("toggle-theme");
    const totalPriceDisplay = document.getElementById("total-price");
    const cart = [];

    let darkMode = false;

    fetch('http://localhost:5000/products')
    .then(response => response.json())
    .then(products => {
      
      const productList = document.getElementById('product-list');
      products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price}</p>
          <button>Add to Cart</button>
        `;
        
        productList.appendChild(productElement);
      });
    })
    .catch(error => console.error('Error fetching products:', error));
  
    async function fetchProducts() {
        try {
            const response = await fetch(apiUrl);
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    function displayProducts(products) {
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                (categoryFilter.value === "" || product.category === categoryFilter.value);
        });
        let cart = [];
        let reviews = [];
        
        
        function renderProducts() {
          const productList = document.getElementById('product-list');
          productList.innerHTML = '';
          products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            
            productElement.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p>$${product.price}</p>
              <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            
            productList.appendChild(productElement);
          });
        }
        
        

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
  
    
    document.getElementById('product-list').addEventListener('click', e => {
      if (e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        addToCart(productId);
      }
    });
  
    
    document.getElementById('cart-list').addEventListener('click', e => {
      if (e.target.classList.contains('remove-from-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        removeFromCart(productId);
      }
    });
  
    
    document.getElementById('clear-cart').addEventListener('click', () => {
      cart = [];
      renderCart();
    });
  });
        
        function handleReviewSubmission(productId) {
          const reviewInput = document.getElementById('review-input');
          const reviewText = reviewInput.value.trim();
        
          if (reviewText !== '') {
            const review = {
              productId,
              text: reviewText,
            };
            reviews.push(review);
            reviewInput.value = ''; 
            renderReviews(productId);
          }
        }
        
        
        function renderReviews(productId) {
          const reviewsContainer = document.getElementById('reviews-container');
          const productReviews = reviews.filter(r => r.productId === productId);
          reviewsContainer.innerHTML = '';
          
          productReviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.textContent = review.text;
            reviewsContainer.appendChild(reviewElement);
          });
        }

        
          
          document.getElementById('cart-list').addEventListener('click', e => {
            if (e.target.classList.contains('remove-from-cart')) {
              const productId = parseInt(e.target.getAttribute('data-id'));
              removeFromCart(productId);
            }
          });
        
          
          document.getElementById('reviews-section').addEventListener('submit', e => {
            e.preventDefault();
            const productId = parseInt(e.target.dataset.productId); // Get the product ID
            handleReviewSubmission(productId);
          });
        
          
          document.getElementById('clear-cart').addEventListener('click', () => {
            cart = [];
            renderCart();
          });
        });
        productsList.innerHTML = "";
        filteredProducts.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product-item");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <p>${product.description}</p>
                <button class="view-details" data-id="${product.id}">View Details</button>
                <button class="add-to-cart" data-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>Add to Cart</button>
            `;
            productsList.appendChild(productElement);
        });
    }

    async function showProductDetails(id) {
        const response = await fetch(`${apiUrl}/${id}`);
        const product = await response.json();
        productDetails.style.display = "block";
        productDetails.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
            <p><strong>Description:</strong> ${product.description}
                
document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://localhost:3000/products";
  const productsList = document.getElementById("products-list");
  const productDetails
}
document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "http://localhost:3000/products";
    const productsList = document.getElementById("products-list");
    const searchBar = document.getElementById("search-bar");
    const clearSearchButton = document.getElementById("clear-search");
    const cartSlots = document.getElementById("cart-slots");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutBtn = 
    
}

const productsList = document.getElementById('products-list');
const categorySelect = document.getElementById('category');
const priceRange = document.getElementById('price-range');
const priceValue = document.getElementById('price-value');
const cartSidebar = document.getElementById('cart');
const cartSlots = document.getElementById('cart-slots');
const totalPriceDisplay = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');


const products = [
    { id: 1, name: "Running Shoes", price: 49.99, category: "shoes", imageUrl: "https://via
