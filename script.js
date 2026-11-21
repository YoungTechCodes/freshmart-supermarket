
/* ============================================================
   FRESHMART SUPERMARKET
   Complete Website JavaScript
   ============================================================ */


/* 1. SETTINGS
------------------------------------------------------------ */

const CART_KEY = "freshmartCart";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=80";


/* 2. PRODUCT COLLECTION
------------------------------------------------------------ */

const products = [

  // FRESH FRUITS

  {
    id: 101,
    name: "Premium Fuji Apples",
    category: "fruits",
    price: 4200,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=700&q=85",
    description: "Crisp, naturally sweet apples for healthy everyday snacking.",
    featured: true
  },

  {
    id: 102,
    name: "Golden Sweet Bananas",
    category: "fruits",
    price: 1800,
    oldPrice: 2200,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=700&q=85",
    description: "Naturally sweet bananas, perfect for breakfast and smoothies.",
    featured: true
  },

  {
    id: 103,
    name: "Fresh Valencia Oranges",
    category: "fruits",
    price: 2500,
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=700&q=85",
    description: "Juicy oranges with a refreshing citrus flavour.",
    featured: true
  },

  {
    id: 104,
    name: "Red Seedless Grapes",
    category: "fruits",
    price: 3800,
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=700&q=85",
    description: "Delicious grapes, ideal for fruit bowls and light snacks."
  },

  {
    id: 105,
    name: "Sweet Ripe Mangoes",
    category: "fruits",
    price: 2200,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=700&q=85",
    description: "Juicy mangoes with a rich tropical taste."
  },

  {
    id: 106,
    name: "Fresh Golden Pineapple",
    category: "fruits",
    price: 2800,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=700&q=85",
    description: "Sweet tropical pineapple for juices and fruit salads."
  },


  // FRESH VEGETABLES

  {
    id: 107,
    name: "Garden Fresh Tomatoes",
    category: "vegetables",
    price: 2000,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=700&q=85",
    description: "Ripe tomatoes for soups, sauces and delicious meals.",
    featured: true
  },

  {
    id: 108,
    name: "Crunchy Fresh Carrots",
    category: "vegetables",
    price: 1600,
    oldPrice: 1900,
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=700&q=85",
    description: "Fresh carrots for salads, cooking and healthy snacks."
  },

  {
    id: 109,
    name: "Green Garden Cucumbers",
    category: "vegetables",
    price: 1200,
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=700&q=85",
    description: "Cool and crisp cucumbers for fresh salads."
  },

  {
    id: 110,
    name: "Fresh Red Onions",
    category: "vegetables",
    price: 1500,
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=700&q=85",
    description: "Everyday cooking essential with rich natural flavour."
  },

  {
    id: 111,
    name: "Fresh Green Spinach",
    category: "vegetables",
    price: 1300,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=700&q=85",
    description: "Leafy greens for soups, smoothies and wholesome meals."
  },

  {
    id: 112,
    name: "Fresh Broccoli",
    category: "vegetables",
    price: 2600,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=700&q=85",
    description: "Fresh broccoli for healthy and colourful dishes."
  },


  // DRINKS AND BEVERAGES

  {
    id: 113,
    name: "Premium Orange Juice",
    category: "drinks",
    price: 2400,
    oldPrice: 2800,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700&q=85",
    description: "A refreshing citrus drink for breakfast and any occasion.",
    featured: true
  },

  {
    id: 114,
    name: "Fresh Lemonade",
    category: "drinks",
    price: 1800,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=700&q=85",
    description: "A bright lemon drink for a refreshing break."
  },

  {
    id: 115,
    name: "Pure Bottled Water",
    category: "drinks",
    price: 500,
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=700&q=85",
    description: "Convenient drinking water for everyday hydration."
  },

  {
    id: 116,
    name: "Tropical Mango Nectar",
    category: "drinks",
    price: 2100,
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=700&q=85",
    description: "A delicious tropical mango beverage."
  },

  {
    id: 117,
    name: "Chilled Yoghurt Drink",
    category: "drinks",
    price: 1700,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=700&q=85",
    description: "A creamy drink for a convenient snack."
  },


  // DAIRY AND EGGS

  {
    id: 118,
    name: "Fresh Whole Milk",
    category: "dairy",
    price: 3200,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=700&q=85",
    description: "A versatile dairy favourite for breakfast and recipes.",
    featured: true
  },

  {
    id: 119,
    name: "Creamy Natural Yoghurt",
    category: "dairy",
    price: 2800,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=85",
    description: "Smooth, creamy yoghurt for a simple everyday treat."
  },

  {
    id: 120,
    name: "Farm Fresh Eggs",
    category: "dairy",
    price: 4500,
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=700&q=85",
    description: "A kitchen essential for breakfasts and home cooking."
  },


  // BAKERY

  {
    id: 121,
    name: "Whole Wheat Bread",
    category: "bakery",
    price: 1800,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=85",
    description: "A satisfying bread option for breakfast and sandwiches."
  },

  {
    id: 122,
    name: "Butter Croissants",
    category: "bakery",
    price: 2500,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=85",
    description: "Golden pastry treats for breakfast and tea time."
  },


  // EVERYDAY GROCERIES

  {
    id: 123,
    name: "Premium Long Grain Rice",
    category: "groceries",
    price: 12500,
    oldPrice: 14000,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700&q=85",
    description: "A versatile pantry staple for family meals.",
    featured: true
  },

  {
    id: 124,
    name: "Golden Vegetable Oil",
    category: "groceries",
    price: 7800,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=700&q=85",
    description: "A useful cooking essential for your kitchen."
  },

  {
    id: 125,
    name: "Quality Brown Beans",
    category: "groceries",
    price: 4200,
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=700&q=85",
    description: "A nutritious pantry favourite for traditional meals."
  },

  {
    id: 126,
    name: "Italian Spaghetti Pasta",
    category: "groceries",
    price: 1500,
    oldPrice: 1800,
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=700&q=85",
    description: "A convenient pasta choice for quick family meals."
  },

  {
    id: 127,
    name: "Premium White Garri",
    category: "groceries",
    price: 3500,
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=700&q=85",
    description: "An everyday Nigerian pantry staple."
  },

  {
    id: 128,
    name: "Rich Tomato Paste",
    category: "groceries",
    price: 1200,
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=700&q=85",
    description: "A convenient ingredient for soups, stews and sauces."
  }

];


/* 3. CATEGORY INFORMATION
------------------------------------------------------------ */

const categoryDetails = [

  {
    name: "Fresh Fruits",
    slug: "fruits",
    description: "Discover naturally delicious fruits for every day.",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700&q=85"
  },

  {
    name: "Fresh Vegetables",
    slug: "vegetables",
    description: "Find fresh ingredients for colourful meals.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&q=85"
  },

  {
    name: "Drinks & Beverages",
    slug: "drinks",
    description: "Explore refreshing drinks and everyday beverages.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700&q=85"
  },

  {
    name: "Dairy & Eggs",
    slug: "dairy",
    description: "Shop useful dairy and breakfast essentials.",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=700&q=85"
  },

  {
    name: "Bakery",
    slug: "bakery",
    description: "Discover bread and delicious bakery favourites.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=85"
  },

  {
    name: "Everyday Groceries",
    slug: "groceries",
    description: "Stock your kitchen with daily essentials.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=85"
  }

];


/* 4. GENERAL HELPERS
------------------------------------------------------------ */

function formatMoney(amount) {

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);

}


function getProduct(id) {

  return products.find(
    product => product.id === Number(id)
  );

}


function getCategoryName(slug) {

  const category = categoryDetails.find(
    item => item.slug === slug
  );

  return category ? category.name : "Groceries";

}


function showToast(message) {

  const toast = document.getElementById("toast");

  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

}


/* 5. SHOPPING CART STORAGE
------------------------------------------------------------ */

function getCart() {

  try {

    const savedCart = JSON.parse(
      localStorage.getItem(CART_KEY)
    );

    if (!Array.isArray(savedCart)) {
      return [];
    }

    return savedCart
      .map(item => ({
        id: Number(item.id),
        quantity: Math.max(
          1,
          Math.floor(Number(item.quantity) || 1)
        )
      }))
      .filter(item => getProduct(item.id));

  } catch (error) {

    console.error("Unable to read shopping cart:", error);

    return [];

  }

}


function saveCart(cart) {

  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cart)
  );

  updateCartCount();

}


function addToCart(productId) {

  const product = getProduct(productId);

  if (!product) {
    showToast("This product could not be found.");
    return;
  }

  const cart = getCart();

  const existingItem = cart.find(
    item => item.id === product.id
  );

  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
      id: product.id,
      quantity: 1
    });

  }

  saveCart(cart);

  renderCart();

  showToast(`${product.name} added to your cart.`);

}


function updateCartCount() {

  const cart = getCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  document.querySelectorAll("[data-cart-count]").forEach(element => {

    element.textContent = totalItems;

  });

}


function changeCartQuantity(productId, change) {

  const cart = getCart();

  const item = cart.find(
    item => item.id === Number(productId)
  );

  if (!item) {
    return;
  }

  item.quantity += change;

  if (item.quantity <= 0) {

    const updatedCart = cart.filter(
      cartItem => cartItem.id !== Number(productId)
    );

    saveCart(updatedCart);

  } else {

    saveCart(cart);

  }

  renderCart();

  renderCheckoutSummary();

}


function removeFromCart(productId) {

  const updatedCart = getCart().filter(
    item => item.id !== Number(productId)
  );

  saveCart(updatedCart);

  renderCart();

  renderCheckoutSummary();

  showToast("Product removed from your cart.");

}


/* 6. PRODUCT CARD DESIGN
------------------------------------------------------------ */

function createProductCard(product) {

  const oldPrice = product.oldPrice
    ? `<span class="product-old-price">
         ${formatMoney(product.oldPrice)}
       </span>`
    : "";

  const badge = product.oldPrice
    ? `<span class="product-badge sale">SPECIAL OFFER</span>`
    : product.featured
      ? `<span class="product-badge">POPULAR PICK</span>`
      : "";

  return `

    <article class="product-card reveal"
      data-product-id="${product.id}">

      <div class="product-image-wrap">

        ${badge}

        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

      </div>

      <div class="product-info">

        <span class="product-category">
          ${getCategoryName(product.category)}
        </span>

        <h3>${product.name}</h3>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="product-price">
          ${formatMoney(product.price)}
          ${oldPrice}
        </div>

        <button
          type="button"
          class="add-to-cart"
          data-add-to-cart="${product.id}"
        >
          Add to Cart +
        </button>

      </div>

    </article>

  `;

}


/* 7. FEATURED PRODUCTS
------------------------------------------------------------ */

function renderFeaturedProducts() {

  const container = document.getElementById("homeFeatured");

  if (!container) {
    return;
  }

  const featuredProducts = products
    .filter(product => product.featured)
    .slice(0, 8);

  container.innerHTML = featuredProducts
    .map(createProductCard)
    .join("");

  observeReveals(container);

}


/* 8. ALL PRODUCTS AND FILTERS
------------------------------------------------------------ */

function renderAllProducts() {

  const container = document.getElementById("allProducts");

  if (!container) {
    return;
  }

  const searchInput = document.getElementById("productSearch");

  const categorySelect = document.getElementById("categoryFilter");

  const sortSelect = document.getElementById("sortFilter");

  const urlParams = new URLSearchParams(
    window.location.search
  );

  const urlSearch = urlParams.get("search") || "";

  const urlCategory = urlParams.get("category") || "";

  if (searchInput && !searchInput.value && urlSearch) {
    searchInput.value = urlSearch;
  }

  if (categorySelect && urlCategory) {

    const matchingOption = Array.from(categorySelect.options).find(
      option =>
        option.value.toLowerCase() === urlCategory.toLowerCase()
    );

    if (matchingOption) {
      categorySelect.value = matchingOption.value;
    }

  }

  let filteredProducts = [...products];

  const searchText = (
    searchInput ? searchInput.value : urlSearch
  ).trim().toLowerCase();

  const selectedCategory = (
    categorySelect ? categorySelect.value : urlCategory
  ).toLowerCase();

  if (searchText) {

    filteredProducts = filteredProducts.filter(product => {

      return (
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
      );

    });

  }

  if (
    selectedCategory &&
    selectedCategory !== "all" &&
    selectedCategory !== "all-products"
  ) {

    filteredProducts = filteredProducts.filter(
      product => product.category === selectedCategory
    );

  }

  const sortValue = sortSelect?.value || "featured";

  if (sortValue === "price-low" || sortValue === "low-high") {

    filteredProducts.sort(
      (a, b) => a.price - b.price
    );

  }

  if (sortValue === "price-high" || sortValue === "high-low") {

    filteredProducts.sort(
      (a, b) => b.price - a.price
    );

  }

  if (sortValue === "name" || sortValue === "name-asc") {

    filteredProducts.sort(
      (a, b) => a.name.localeCompare(b.name)
    );

  }

  if (sortValue === "featured") {

    filteredProducts.sort(
      (a, b) =>
        Number(Boolean(b.featured)) -
        Number(Boolean(a.featured))
    );

  }

  if (filteredProducts.length === 0) {

    container.innerHTML = `

      <div class="empty-message">

        <h3>No matching products found</h3>

        <p>
          Try another search or select a different category.
        </p>

      </div>

    `;

  } else {

    container.innerHTML = filteredProducts
      .map(createProductCard)
      .join("");

  }

  const resultCount = document.getElementById("productCount");

  if (resultCount) {

    resultCount.textContent =
      `${filteredProducts.length} products found`;

  }

  observeReveals(container);

}


/* 9. PRODUCT FILTER EVENTS
------------------------------------------------------------ */

function setupProductFilters() {

  const searchInput = document.getElementById("productSearch");

  const categorySelect = document.getElementById("categoryFilter");

  const sortSelect = document.getElementById("sortFilter");

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      renderAllProducts
    );

  }

  if (categorySelect) {

    categorySelect.addEventListener(
      "change",
      renderAllProducts
    );

  }

  if (sortSelect) {

    sortSelect.addEventListener(
      "change",
      renderAllProducts
    );

  }

}


/* 10. SPECIAL OFFERS
------------------------------------------------------------ */

function renderOffers() {

  const container = document.getElementById("offerProducts");

  if (!container) {
    return;
  }

  const offerProducts = products.filter(product => {

    return (
      product.oldPrice &&
      product.oldPrice > product.price
    );

  });

  container.innerHTML = offerProducts
    .map(createProductCard)
    .join("");

  observeReveals(container);

}


/* 11. CATEGORIES PAGE
------------------------------------------------------------ */

function renderCategories() {

  const container =
    document.getElementById("categoryGrid") ||
    document.getElementById("categoryList") ||
    document.getElementById("categoriesGrid");

  if (!container) {
    return;
  }

  container.innerHTML = categoryDetails.map(category => `

    <a
      href="products.html?category=${category.slug}"
      class="category-tile reveal"
    >

      <img
        src="${category.image}"
        alt="${category.name}"
        loading="lazy"
      >

      <div class="category-tile-content">

        <h3>${category.name}</h3>

        <p>${category.description}</p>

      </div>

    </a>

  `).join("");

  observeReveals(container);

}


/* 12. CART PAGE
------------------------------------------------------------ */

function renderCart() {

  const container = document.getElementById("cartItems");

  if (!container) {
    updateCartCount();
    return;
  }

  const cart = getCart();

  if (cart.length === 0) {

    container.innerHTML = `

      <div class="empty-message">

        <div style="font-size:42px; margin-bottom:12px;">
          🛒
        </div>

        <h3>Your shopping cart is empty</h3>

        <p>
          Explore our products and add your favourites to get started.
        </p>

        <a href="products.html"
          class="btn btn-primary"
          style="margin-top:18px;">
          Start Shopping →
        </a>

      </div>

    `;

    updateCartTotals(0);

    updateCartCount();

    return;

  }

  let subtotal = 0;

  container.innerHTML = cart.map(item => {

    const product = getProduct(item.id);

    if (!product) {
      return "";
    }

    const itemTotal = product.price * item.quantity;

    subtotal += itemTotal;

    return `

      <article class="cart-item">

        <div class="cart-item-image">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >

        </div>

        <div class="cart-item-details">

          <h3>${product.name}</h3>

          <p>${getCategoryName(product.category)}</p>

          <div class="cart-item-price">
            ${formatMoney(itemTotal)}
          </div>

          <div class="quantity-control">

            <button
              type="button"
              data-cart-action="decrease"
              data-product-id="${product.id}"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-cart-action="increase"
              data-product-id="${product.id}"
              aria-label="Increase quantity"
            >
              +
            </button>

          </div>

          <button
            type="button"
            class="remove-item"
            data-remove-item="${product.id}"
          >
            Remove Product
          </button>

        </div>

        <strong>
          ${formatMoney(product.price)}
        </strong>

      </article>

    `;

  }).join("");

  updateCartTotals(subtotal);

  updateCartCount();

  observeReveals(container);

}


function updateCartTotals(subtotal) {

  const delivery = subtotal > 0 ? 1500 : 0;

  const total = subtotal + delivery;

  const subtotalElement =
    document.getElementById("cartSubtotal");

  const totalElement =
    document.getElementById("cartTotal");

  const deliveryElement =
    document.getElementById("cartDelivery");

  if (subtotalElement) {
    subtotalElement.textContent = formatMoney(subtotal);
  }

  if (deliveryElement) {
    deliveryElement.textContent = formatMoney(delivery);
  }

  if (totalElement) {
    totalElement.textContent = formatMoney(total);
  }

}


/* 13. CHECKOUT SUMMARY
------------------------------------------------------------ */

function renderCheckoutSummary() {

  const cart = getCart();

  const totalElement =
    document.getElementById("checkoutTotal");

  const itemsElement =
    document.getElementById("checkoutItems");

  let subtotal = 0;

  cart.forEach(item => {

    const product = getProduct(item.id);

    if (product) {

      subtotal += product.price * item.quantity;

    }

  });

  const delivery = subtotal > 0 ? 1500 : 0;

  const total = subtotal + delivery;

  if (totalElement) {

    totalElement.textContent = formatMoney(total);

  }

  if (itemsElement) {

    if (cart.length === 0) {

      itemsElement.innerHTML = `
        <p>Your cart is currently empty.</p>
      `;

    } else {

      itemsElement.innerHTML = cart.map(item => {

        const product = getProduct(item.id);

        return `

          <div class="checkout-product">

            <span>
              ${product.name} × ${item.quantity}
            </span>

            <strong>
              ${formatMoney(product.price * item.quantity)}
            </strong>

          </div>

        `;

      }).join("");

    }

  }

  const checkoutSubtotal =
    document.getElementById("checkoutSubtotal");

  const checkoutDelivery =
    document.getElementById("checkoutDelivery");

  if (checkoutSubtotal) {

    checkoutSubtotal.textContent = formatMoney(subtotal);

  }

  if (checkoutDelivery) {

    checkoutDelivery.textContent = formatMoney(delivery);

  }

}


/* 14. GLOBAL CART BUTTONS
------------------------------------------------------------ */

function setupGlobalCartActions() {

  updateCartCount();

  document.addEventListener("click", event => {

    const addButton = event.target.closest("[data-add-to-cart]");

    if (addButton) {

      addToCart(addButton.dataset.addToCart);

      return;

    }

    const quantityButton =
      event.target.closest("[data-cart-action]");

    if (quantityButton) {

      const change =
        quantityButton.dataset.cartAction === "increase"
          ? 1
          : -1;

      changeCartQuantity(
        quantityButton.dataset.productId,
        change
      );

      return;

    }

    const removeButton =
      event.target.closest("[data-remove-item]");

    if (removeButton) {

      removeFromCart(removeButton.dataset.removeItem);

    }

  });

}


/* 15. MOBILE MENU
------------------------------------------------------------ */

function setupMobileMenu() {

  const menuButton = document.getElementById("menuToggle");

  const navbar = document.getElementById("mainNavbar");

  if (!menuButton || !navbar) {
    return;
  }

  menuButton.addEventListener("click", () => {

    const isOpen = navbar.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

  });

  navbar.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navbar.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");

      menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

      menuButton.textContent = "☰";

    });

  });

  window.addEventListener("resize", () => {

    if (window.innerWidth > 680) {

      navbar.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");

      menuButton.textContent = "☰";

    }

  });

}


/* 16. FADE-IN ANIMATIONS
------------------------------------------------------------ */

let revealObserver = null;


function observeReveals(root = document) {

  const elements = root.querySelectorAll(
    ".reveal:not(.visible)"
  );

  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => {
      element.classList.add("visible");
    });

    return;

  }

  if (!revealObserver) {

    revealObserver = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    }, {

      threshold: 0.12,

      rootMargin: "0px 0px -35px 0px"

    });

  }

  elements.forEach(element => {

    revealObserver.observe(element);

  });

}


function setupRevealAnimations() {

  observeReveals();

}


/* 17. BROKEN IMAGE FALLBACK
------------------------------------------------------------ */

function setupImageFallback() {

  document.addEventListener("error", event => {

    const image = event.target;

    if (
      image.tagName !== "IMG" ||
      image.dataset.fallbackApplied === "true"
    ) {
      return;
    }

    image.dataset.fallbackApplied = "true";

    image.src = FALLBACK_IMAGE;

  }, true);

}


/* 18. HEADER SEARCH
------------------------------------------------------------ */

function setupHeaderSearch() {

  document.querySelectorAll("[data-search-form]").forEach(form => {

    form.addEventListener("submit", event => {

      const input = form.querySelector(
        'input[type="search"]'
      );

      if (!input || !input.value.trim()) {

        event.preventDefault();

        showToast("Enter a product name to search.");

      }

    });

  });

}

function setupContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    // Collect the customer's information
    const name = document.getElementById("contactName").value.trim();

    const email = document.getElementById("contactEmail").value.trim();

    const subject = document.getElementById("contactSubject").value;

    const message = document.getElementById("contactText").value.trim();

    // Prepare the WhatsApp message
    const whatsappMessage =
      `Hello FreshMart!

I would like to make an enquiry.

Customer Name: ${name}

Email Address: ${email}

Subject: ${subject}

Message:
${message}

Sent through the FreshMart website.`;

    // Encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // FreshMart WhatsApp number in international format
    const whatsappNumber = "2349133819307";

    // Build the WhatsApp link
    const whatsappLink =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(
      whatsappLink,
      "_blank",
      "noopener,noreferrer"
    );

    // Display confirmation on the website
    const feedback = document.getElementById("contactMessage");

    if (feedback) {
      feedback.textContent =
        "WhatsApp is opening with your message ready to send. Please press Send in WhatsApp.";

      feedback.className = "form-message success";
    }

    showToast("Opening your WhatsApp message...");
  });
}

/* 20. NEWSLETTER FORM
------------------------------------------------------------ */

function setupNewsletterForm() {

  const form = document.getElementById("newsletterForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", event => {

    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    showToast(
      "Thank you for your interest! Newsletter sign-up needs an email service."
    );

    form.reset();

  });

}


/* 21. CHECKOUT FORM
------------------------------------------------------------ */

function setupCheckoutForm() {

  const form = document.getElementById("checkoutForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", event => {

    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const cart = getCart();

    const message =
      document.getElementById("checkoutMessage");

    if (cart.length === 0) {

      if (message) {

        message.textContent =
          "Your shopping cart is empty. Add products before checkout.";

        message.className = "form-message error";

      }

      showToast("Your cart is empty.");

      return;

    }

    const confirmation =
      "Your checkout details are valid. This is a demonstration website; no order or payment has been submitted. A backend is required for real orders.";

    if (message) {

      message.textContent = confirmation;

      message.className = "form-message success";

    }

    showToast(
      "Demo checkout validated. No real order was placed."
    );

  });

}


/* 22. ACTIVE NAVIGATION
------------------------------------------------------------ */

function setActiveNavigation() {

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar a").forEach(link => {

    const linkPage = link.getAttribute("href")?.split("?")[0];

    if (linkPage === currentPage) {

      link.classList.add("active");

    } else {

      link.classList.remove("active");

    }

  });

}


/* 23. START THE WEBSITE
------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {

  setupImageFallback();

  setupGlobalCartActions();

  setupMobileMenu();

  setupRevealAnimations();

  setupHeaderSearch();

  setupProductFilters();

  setupContactForm();

  setupNewsletterForm();

  setupCheckoutForm();

  setActiveNavigation();

  renderFeaturedProducts();

  renderAllProducts();

  renderOffers();

  renderCategories();

  renderCart();

  renderCheckoutSummary();

});
