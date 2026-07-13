/* ============================================
   AYUKESHA CEYLON HERBAL OIL
   Premium eCommerce Website JavaScript
   ============================================

   ADMIN EDIT FRIENDLY CONFIGURATION
   Modify the values below to customize the website
   without touching any other code.
   ============================================ */

// ============================================
// PRODUCT CONFIGURATION - EDIT THESE VALUES
// ============================================
const PRODUCTS = {
    1: {
        id: 1,
        name: "AYUKESHA CEYLON HERBAL OIL",
        tagline: "100% Natural • Ayurvedic Formula • Made in Sri Lanka",
        description: "A premium herbal oil crafted using ancient Ayurvedic recipes from Sri Lanka. Made with carefully selected natural herbs and cold-pressed oils to deliver maximum therapeutic benefits for your overall wellness.",
        benefits: [
            "Relieves muscle and joint pain naturally",
            "Improves blood circulation throughout the body",
            "Reduces inflammation and swelling",
            "Promotes relaxation and stress relief",
            "100% natural with no harmful chemicals",
            "Strengthens bones and muscles over time"
        ],
        usage: "Apply a small amount to the affected area and massage gently in circular motions for 5-10 minutes. Use 2-3 times daily for best results. For external use only. Keep away from children.",
        // Image paths - replace with your actual image files
        logo: "images/logo-green.png",
        bottleImage: "images/bottle-sample.png",
        theme: "green"
    },
    2: {
        id: 2,
        name: "Wishwa Shakthi Sandhi Oil",
        tagline: "Joint Strength • Pain Relief • Natural Healing",
        description: "A specialized Ayurvedic joint oil formulated to provide relief from arthritis, joint pain, and muscle stiffness. Enriched with powerful herbs known for their anti-inflammatory and pain-relieving properties.",
        benefits: [
            "Provides fast relief from joint and muscle pain",
            "Reduces arthritis symptoms and inflammation",
            "Improves joint flexibility and mobility",
            "Strengthens bones and cartilage",
            "Natural warming effect for deep relief",
            "Safe for long-term use"
        ],
        usage: "Warm the oil slightly and apply to painful joints or muscles. Massage gently until fully absorbed. Cover with a warm cloth for 15-20 minutes for enhanced effect. Use twice daily, morning and evening.",
        // Image paths - replace with your actual image files
        logo: "images/logo-blue.png",
        bottleImage: "images/bottle-sample.png",
        theme: "blue"
    }
};

// ============================================
// PRICING CONFIGURATION - EDIT THESE VALUES
// ============================================
const PRICES = {
    50: 990,    // 50ML bottle price in LKR
    100: 1990,  // 100ML bottle price in LKR
    200: 2990   // 200ML bottle price in LKR
};

const DELIVERY_CHARGE = 500; // Delivery charge in LKR

// ============================================
// REVIEWS CONFIGURATION - EDIT THESE VALUES
// Add more reviews by adding objects to this array
// ============================================
const REVIEWS = [
    {
        name: "Nimal Perera",
        avatar: "images/avatar-1.png",
        rating: 5,
        text: "This oil has completely changed my life! I had severe knee pain for years, and after using Ayukesha Herbal Oil for just two weeks, the pain has significantly reduced. Highly recommended!",
        date: "2026-06-15"
    },
    {
        name: "Kumari Silva",
        avatar: "images/avatar-2.png",
        rating: 5,
        text: "Amazing product! The natural ingredients make me feel safe using it daily. My back pain is almost gone now. The delivery was also very fast. Will definitely order again.",
        date: "2026-06-10"
    },
    {
        name: "Rohan Fernando",
        avatar: "images/avatar-3.png",
        rating: 4,
        text: "Great quality herbal oil. I use it for my shoulder pain after gym workouts. It provides excellent relief. The scent is pleasant and not overpowering like other medicinal oils.",
        date: "2026-05-28"
    },
    {
        name: "Dilani Jayasuriya",
        avatar: "images/avatar-4.png",
        rating: 5,
        text: "I bought this for my mother who suffers from arthritis. She says it's the best oil she has ever used. The pain relief is immediate and lasts for hours. Thank you Ayukesha!",
        date: "2026-05-20"
    },
    {
        name: "Sanjeewa Bandara",
        avatar: "images/avatar-5.png",
        rating: 5,
        text: "Authentic Sri Lankan Ayurvedic product. You can feel the quality from the first application. My muscle stiffness after long hours of driving is completely gone. Five stars!",
        date: "2026-05-15"
    },
    {
        name: "Malini Weerasinghe",
        avatar: "images/avatar-6.png",
        rating: 4,
        text: "Very effective for joint pain relief. I appreciate that it's made from natural ingredients with no side effects. The packaging is also very professional. Worth every rupee!",
        date: "2026-05-08"
    }
];

// ============================================
// GALLERY IMAGES - EDIT THESE PATHS
// ============================================
const GALLERY_IMAGES = [
    { src: "images/gallery-1.png", label: "Premium Quality" },
    { src: "images/gallery-2.png", label: "Natural Ingredients" },
    { src: "images/gallery-3.png", label: "Ayurvedic Formula" },
    { src: "images/gallery-4.png", label: "Made in Sri Lanka" },
    { src: "images/gallery-5.png", label: "Handcrafted" },
    { src: "images/gallery-6.png", label: "Trusted Brand" }
];

// ============================================
// WHATSAPP CONFIGURATION
// ============================================
const WHATSAPP_NUMBER = "94769884646"; // Format: country code + number without +

// ============================================
// LANGUAGE LABELS
// ============================================
const LABELS = {
    en: {
        name: "Name:",
        address: "Address:",
        city: "Nearest City:",
        phone: "Phone Number:"
    },
    si: {
        name: "නම:",
        address: "ලිපිනය:",
        city: "ආසන්නම නගරය:",
        phone: "දුරකථන අංකය:"
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================
let currentProduct = null;
let quantities = { 50: 0, 100: 0, 200: 0 };
let currentLanguage = 'en';

// ============================================
// PRODUCT SELECTION
// ============================================
function selectProduct(productId) {
    currentProduct = PRODUCTS[productId];

    // Hide selection screen
    document.getElementById('product-selection').classList.add('hidden');

    // Show main website
    const mainWebsite = document.getElementById('main-website');
    mainWebsite.classList.add('active');

    // Apply product theme
    applyProductTheme(productId);

    // Update product content
    updateProductContent();

    // Reset quantities
    resetQuantities();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showProductSelection() {
    // Hide main website
    document.getElementById('main-website').classList.remove('active');

    // Show selection screen
    document.getElementById('product-selection').classList.remove('hidden');

    // Reset current product
    currentProduct = null;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// THEME APPLICATION
// ============================================
function applyProductTheme(productId) {
    const product = PRODUCTS[productId];
    const root = document.documentElement;

    if (product.theme === 'blue') {
        // Apply blue theme
        root.style.setProperty('--primary-green', '#1a3a6b');
        root.style.setProperty('--primary-green-light', '#2d5a9a');
        root.style.setProperty('--primary-green-dark', '#0d1f3d');
        root.style.setProperty('--accent-green', '#60a5fa');
        root.style.setProperty('--glow-green', 'rgba(96, 165, 250, 0.3)');
       root.style.setProperty('--white', '#EDF6FF');
       root.style.setProperty('--off-white', '#E5F1FF');
       root.style.setProperty('--cream', '#D8E8FF');
    } else {
        // Apply green theme (default)
        root.style.setProperty('--primary-green', '#1a5c3a');
        root.style.setProperty('--primary-green-light', '#2d8a5a');
        root.style.setProperty('--primary-green-dark', '#0d3d24');
        root.style.setProperty('--accent-green', '#4ade80');
        root.style.setProperty('--glow-green', 'rgba(74, 222, 128, 0.3)');
       root.style.setProperty('--white', '#F2FAF2');
       root.style.setProperty('--off-white', '#E8F5E9');
       root.style.setProperty('--cream', '#D9EDD9');
    }

    // Add theme transition animation
    document.body.classList.add('theme-changing');
    setTimeout(() => {
        document.body.classList.remove('theme-changing');
    }, 600);
}

// ============================================
// UPDATE PRODUCT CONTENT
// ============================================
function updateProductContent() {
    if (!currentProduct) return;

    // Update logos
    document.getElementById('nav-logo-img').src = currentProduct.logo;
    document.getElementById('hero-logo-img').src = currentProduct.logo;
    document.getElementById('footer-logo').src = currentProduct.logo;

    // Update hero content
    document.getElementById('product-name').textContent = currentProduct.name;
    document.getElementById('product-tagline').textContent = currentProduct.tagline;
    document.getElementById('product-description').textContent = currentProduct.description;
    document.getElementById('product-usage').textContent = currentProduct.usage;

    // Update hero bottle image
    document.getElementById('hero-bottle-img').src = currentProduct.bottleImage;

    // Update benefits list
    const benefitsList = document.getElementById('product-benefits');
    benefitsList.innerHTML = '';
    currentProduct.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    // Update glow color
    const glow = document.getElementById('hero-glow');
    if (currentProduct.theme === 'blue') {
        glow.style.background = 'radial-gradient(circle, rgba(96, 165, 250, 0.4), transparent)';
    } else {
        glow.style.background = 'radial-gradient(circle, rgba(74, 222, 128, 0.4), transparent)';
    }
}

// ============================================
// QUANTITY MANAGEMENT
// ============================================
function updateQuantity(size, change) {
    const newQty = quantities[size] + change;
    if (newQty >= 0) {
        quantities[size] = newQty;
        document.getElementById(`qty-${size}`).textContent = newQty;
        updateSubtotal(size);
        updateOrderSummary();
        validateForm();
    }
}

function updateSubtotal(size) {
    const subtotal = quantities[size] * PRICES[size];
    document.getElementById(`sub-${size}`).textContent = subtotal.toLocaleString();
}

function updateOrderSummary() {
    let subtotal = 0;
    for (const size in quantities) {
        subtotal += quantities[size] * PRICES[size];
    }

    const grandTotal = subtotal + DELIVERY_CHARGE;

    document.getElementById('summary-subtotal').textContent = subtotal.toLocaleString();
    document.getElementById('summary-total').textContent = grandTotal.toLocaleString();
}

function resetQuantities() {
    quantities = { 50: 0, 100: 0, 200: 0 };
    [50, 100, 200].forEach(size => {
        document.getElementById(`qty-${size}`).textContent = '0';
        document.getElementById(`sub-${size}`).textContent = '0';
    });
    updateOrderSummary();
}

// ============================================
// FORM MANAGEMENT
// ============================================
function openCustomerForm() {
    document.getElementById('form-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    validateForm();
}

function closeCustomerForm() {
    document.getElementById('form-modal').classList.remove('active');
    document.body.style.overflow = '';
}

function switchLanguage(lang) {
    currentLanguage = lang;

    // Update button states
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('lang-si').classList.toggle('active', lang === 'si');

    // Update labels
    document.getElementById('label-name').textContent = LABELS[lang].name;
    document.getElementById('label-address').textContent = LABELS[lang].address;
    document.getElementById('label-city').textContent = LABELS[lang].city;
    document.getElementById('label-phone').textContent = LABELS[lang].phone;
}

function validateForm() {
    const name = document.getElementById('customer-name').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const city = document.getElementById('customer-city').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();

    // Check if at least one bottle is selected
    const hasBottles = quantities[50] > 0 || quantities[100] > 0 || quantities[200] > 0;

    // Check if all fields are filled
    const allFieldsFilled = name && address && city && phone;

    const orderBtn = document.getElementById('order-btn');
    orderBtn.disabled = !(hasBottles && allFieldsFilled);
}

// ============================================
// WHATSAPP ORDER SYSTEM
// ============================================
function placeOrder() {
    const name = document.getElementById('customer-name').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const city = document.getElementById('customer-city').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();

    // Build order details
    let orderDetails = '';
    let subtotal = 0;

    [50, 100, 200].forEach(size => {
        if (quantities[size] > 0) {
            const lineTotal = quantities[size] * PRICES[size];
            subtotal += lineTotal;
            orderDetails += `${size}ML Bottle x ${quantities[size]} = Rs.${lineTotal.toLocaleString()}/=\n`;
        }
    });

    const grandTotal = subtotal + DELIVERY_CHARGE;

    // Build WhatsApp message
    const message = `NEW ORDER

Product:
${currentProduct.name}

Customer Details:

Name: ${name}
Address: ${address}
City: ${city}
Phone: ${phone}

Order Details:

${orderDetails}
Subtotal: Rs.${subtotal.toLocaleString()}/=

Delivery Charge: Rs.${DELIVERY_CHARGE.toLocaleString()}/=

Total Amount: Rs.${grandTotal.toLocaleString()}/=`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    // Close form
    closeCustomerForm();
}

// ============================================
// SCROLL TO SIZES SECTION
// ============================================
function scrollToSizes() {
    document.getElementById('sizes-section').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// RENDER REVIEWS
// ============================================
function renderReviews() {
    const container = document.getElementById('reviews-container');
    container.innerHTML = '';

    REVIEWS.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';

        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        card.innerHTML = `
            <div class="review-header">
                <img src="${review.avatar}" alt="${review.name}" class="review-avatar" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><rect width=%2260%22 height=%2260%22 fill=%22%23ddd%22/><text x=%2230%22 y=%2235%22 text-anchor=%22middle%22 fill=%22%23666%22 font-size=%2224%22>${review.name.charAt(0)}</text></svg>'">
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="review-stars">${stars}</div>
                </div>
            </div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-date">${formatDate(review.date)}</p>
        `;

        container.appendChild(card);
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ============================================
// RENDER GALLERY
// ============================================
function renderGallery() {
    const grid = document.querySelector('.gallery-grid');
    grid.innerHTML = '';

    GALLERY_IMAGES.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
            <img src="${item.src}" alt="${item.label}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect width=%22400%22 height=%22300%22 fill=%22%23f0ebe3%22/><text x=%22200%22 y=%22150%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2218%22>${item.label}</text></svg>'">
            <div class="gallery-overlay">
                <span>${item.label}</span>
            </div>
        `;
        grid.appendChild(div);
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Render reviews
    renderReviews();

    // Render gallery
    renderGallery();

    // Initialize form validation
    validateForm();

    // Add keyboard support for form modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCustomerForm();
        }
    });

    // Add input event listeners for form fields
    ['customer-name', 'customer-address', 'customer-city', 'customer-phone'].forEach(id => {
        document.getElementById(id).addEventListener('input', validateForm);
    });

    // Initialize selection screen product names
    document.getElementById('selection-name-1').textContent = PRODUCTS[1].name;
    document.getElementById('selection-name-2').textContent = PRODUCTS[2].name;
});

// ============================================
// UTILITY: Debounce function for performance
// ============================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// UTILITY: Smooth scroll polyfill for older browsers
// ============================================
if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
