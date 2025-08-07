document.addEventListener('DOMContentLoaded', () => {

    // 1. Array of Product Objects
    const products = [
        { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'electronics', image: 'https://via.placeholder.com/400x400/5A5A9B/fff?text=Headphones' },
        { id: 2, name: 'Stylish T-Shirt', price: 25.50, category: 'clothing', image: 'https://via.placeholder.com/400x400/8C8CBE/fff?text=T-Shirt' },
        { id: 3, name: 'The Art of Code', price: 45.00, category: 'books', image: 'https://via.placeholder.com/400x400/5A5A9B/fff?text=Book' },
        { id: 4, name: 'Smartwatch', price: 199.00, category: 'electronics', image: 'https://via.placeholder.com/400x400/8C8CBE/fff?text=Smartwatch' },
        { id: 5, name: 'Coffee Maker', price: 75.99, category: 'home', image: 'https://via.placeholder.com/400x400/5A5A9B/fff?text=Coffee+Maker' },
        { id: 6, name: 'Running Shoes', price: 80.00, category: 'clothing', image: 'https://via.placeholder.com/400x400/8C8CBE/fff?text=Shoes' },
        { id: 7, name: 'JavaScript Mastery', price: 60.00, category: 'books', image: 'https://via.placeholder.com/400x400/5A5A9B/fff?text=JS+Book' },
        { id: 8, name: 'Bluetooth Speaker', price: 55.00, category: 'electronics', image: 'https://via.placeholder.com/400x400/8C8CBE/fff?text=Speaker' },
        { id: 9, name: 'Desk Lamp', price: 30.00, category: 'home', image: 'https://via.placeholder.com/400x400/5A5A9B/fff?text=Lamp' },
        { id: 10, name: 'Winter Jacket', price: 120.00, category: 'clothing', image: 'https://via.placeholder.com/400x400/8C8CBE/fff?text=Jacket' },
        { id: 11, name: 'React for Beginners', price: 50.00, category: 'books', image: 'https://via.placeholder.com/400x400/5A5A9B/fff?text=React+Book' },
        { id: 12, name: 'Ergonomic Chair', price: 350.00, category: 'home', image: 'https://via.placeholder.com/400x400/8C8CBE/fff?text=Chair' }
    ];

    // 2. DOM Elements
    const productListContainer = document.getElementById('product-list');
    const categoryFilter = document.getElementById('category-filter');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const applyPriceFilterBtn = document.getElementById('apply-price-filter');
    const sortPrice = document.getElementById('sort-price');
    const searchInput = document.getElementById('search-input');
    const listViewBtn = document.getElementById('list-view-btn');
    const gridViewBtn = document.getElementById('grid-view-btn');
    const productCountSpan = document.getElementById('product-count');

    let currentView = 'grid'; // Default view

    // 3. Render Product Function
    const renderProducts = (filteredProducts) => {
        productListContainer.innerHTML = '';
        productCountSpan.textContent = `${filteredProducts.length} Products`;

        if (currentView === 'grid') {
            productListContainer.classList.remove('product-list');
            productListContainer.classList.add('product-grid');
        } else {
            productListContainer.classList.remove('product-grid');
            productListContainer.classList.add('product-list');
        }

        if (filteredProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-products">No products found.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-item-img">
                <div class="product-item-details">
                    <h4>${product.name}</h4>
                    <p class="category">${product.category}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                </div>
            `;
            productListContainer.appendChild(productElement);
        });
    };

    // 4. Main Filter & Sort Logic
    const applyFiltersAndSort = () => {
        let filteredProducts = [...products];

        // Search by product name
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredProducts = filteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
        }

        // Category filter
        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product =>
                product.category === selectedCategory
            );
        }

        // Price range filter
        const minPrice = parseFloat(minPriceInput.value);
        const maxPrice = parseFloat(maxPriceInput.value);
        filteredProducts = filteredProducts.filter(product =>
            (!isNaN(minPrice) ? product.price >= minPrice : true) &&
            (!isNaN(maxPrice) ? product.price <= maxPrice : true)
        );

        // Sort by price
        const sortOrder = sortPrice.value;
        if (sortOrder === 'low-to-high') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'high-to-low') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        renderProducts(filteredProducts);
    };

    // 5. Event Listeners
    categoryFilter.addEventListener('change', applyFiltersAndSort);
    applyPriceFilterBtn.addEventListener('click', applyFiltersAndSort);
    sortPrice.addEventListener('change', applyFiltersAndSort);
    searchInput.addEventListener('input', applyFiltersAndSort);

    listViewBtn.addEventListener('click', () => {
        currentView = 'list';
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        applyFiltersAndSort();
    });

    gridViewBtn.addEventListener('click', () => {
        currentView = 'grid';
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        applyFiltersAndSort();
    });

    // 6. Initial Render
    applyFiltersAndSort();
});