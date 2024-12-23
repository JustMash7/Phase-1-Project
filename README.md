
Sports E-commerce SPA

Description
This is a Single Page Application (SPA) for an e-commerce website selling sportswear and gear. The website allows users to browse through a variety of products, add items to their cart, remove items from the cart, and leave reviews for the products. The project uses HTML, CSS, JavaScript, and JSON Server as a mock backend to simulate an e-commerce experience.

Features:
Browse Products: Users can view various sportswear and gear items available for sale.
Add to Cart: Users can add products to their shopping cart.
Remove from Cart: Users can remove products from their cart.
Leave Reviews: Users can leave reviews on the products they purchased.
Mock Database: The products and reviews are served from a db.json file using JSON Server.
Technologies Used:
HTML: The structure of the webpage.
CSS: Styling the page to make it responsive and attractive.
JavaScript: Handling dynamic content, event listeners, and interactions.
JSON Server: A fake REST API to serve product and review data.
Git: For version control and deployment.
Getting Started
Prerequisites
Make sure you have the following tools installed on your system:

Node.js (Download and install from here)
npm (comes with Node.js)
json-server (to simulate a backend API)
Installing
Clone the Repository:

bash
git clone https://github.com/JustMash7/Phase-1-project.git

Install Dependencies:

If you don’t have json-server installed globally, run the following command to install it:

bash
Copy code
npm install -g json-server
Start the JSON Server:

Run the following command to start your mock API server:

bash
Copy code
json-server --watch db.json
This will start the mock API at http://localhost:3000, where you can interact with the product data.

Open the Website:

Open the index.html file in your browser to start interacting with the e-commerce website. 

MVP
1. Browse Products
Users can see a variety of sports-related products displayed on the homepage. Each product has its name, price, description, and image.

2. Add to Cart
Users can click the "Add to Cart" button to add items to their shopping cart. The cart is displayed in the navbar with the number of items in it.

3. Remove from Cart
Users can remove items from their cart by clicking the "Remove" button next to each item in the cart.

4. Leave Reviews
Users can leave reviews for products by entering their name, rating, and a comment. The reviews are stored locally in the db.json file.

Contribution
Feel free to fork the repository and contribute by submitting pull requests for new features, bug fixes, or improvements!

License
This project is licensed under the MIT License - see the LICENSE file for details.

