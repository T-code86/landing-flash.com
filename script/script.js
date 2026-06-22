// Hardware Device Matrix Array Engine holding specific individual configuration metrics
const deviceDataset = {
    iphone15: {
        title: "iPhone 15 Pro Max",
        pitch: "Forged in aerospace-grade titanium with an advanced A17 Pro system chip layout. Massive camera capability adjustments with the structural 5x Telephoto lens.",
        price: "$999",
        bgText: "iPM 15",
        glow: "radial-gradient(circle, rgba(110, 111, 115, 0.2) 0%, rgba(0,0,0,0) 70%)",
        frontViewImg: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=500&auto=format&fit=crop",
        backViewImg: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=500&auto=format&fit=crop",
        finishes: [
            { hex: "#525356", label: "Natural Titanium" },
            { hex: "#232426", label: "Black Titanium" },
            { hex: "#e3e4e5", label: "White Titanium" }
        ]
    },
    iphone16: {
        title: "iPhone 16 Pro Max",
        pitch: "Built for Apple Intelligence processor modules. Sleek titanium exterior design languages tracking a radical new dynamic physical Camera Control slider panel tool.",
        price: "$1,199",
        bgText: "iPM 16",
        glow: "radial-gradient(circle, rgba(196, 180, 161, 0.2) 0%, rgba(0,0,0,0) 70%)",
        // Distinct frontal array frame view
        frontViewImg: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=500&auto=format&fit=crop",
        // Distinct structural backend frame view
        backViewImg: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=500&auto=format&fit=crop",
        finishes: [
            { hex: "#3c3d3a", label: "Desert Titanium" },
            { hex: "#232426", label: "Black Titanium" },
            { hex: "#e3e4e5", label: "White Titanium" }
        ]
    },
    iphone17: {
        title: "iPhone 17 Pro Max",
        pitch: "The future unfolding. Ultra-thin architecture blueprints showcasing integrated 120Hz ProMotion layout metrics and under-display structural matrix arrays.",
        price: "Coming Soon",
        bgText: "iPM 17",
        glow: "radial-gradient(circle, rgba(0, 113, 227, 0.18) 0%, rgba(0,0,0,0) 70%)",
        frontViewImg: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=500&auto=format&fit=crop",
        backViewImg: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?q=80&w=500&auto=format&fit=crop",
        finishes: [
            { hex: "#1e293b", label: "Quantum Slate" },
            { hex: "#0284c7", label: "Liquid Blue" },
            { hex: "#f8fafc", label: "Ceramic Platinum" }
        ]
    }
};

// Target and bind structural DOM layout elements
const displayTitle = document.getElementById('display-title');
const displayPitch = document.getElementById('display-pitch');
const displayPrice = document.getElementById('display-price');
const bgText = document.getElementById('bg-text');
const imgFront = document.getElementById('phone-front');
const imgBack = document.getElementById('phone-back');
const glowLayer = document.getElementById('glow-layer');
const swatchesBox = document.getElementById('color-swatches');
const colorNameLabel = document.getElementById('color-label');
const selectionCards = document.querySelectorAll('.device-card');

/**
 * Executes full transitions of content across front/back phone hardware images
 */
function switchDeviceDashboard(modelKey) {
    const product = deviceDataset[modelKey];
    if (!product) return;

    // Apply fade-out cinematic delay animation
    imgFront.style.opacity = '0';
    imgBack.style.opacity = '0';
    imgFront.style.transform = 'scale(0.8) rotate(-5deg)';
    imgBack.style.transform = 'scale(0.8) rotate(5deg)';

    setTimeout(() => {
        // Swap structural descriptions and text headers 
        displayTitle.textContent = product.title;
        displayPitch.textContent = product.pitch;
        displayPrice.textContent = product.price;
        bgText.textContent = product.bgText;
        glowLayer.style.background = product.glow;

        // Change hardware front and back chassis images simultaneously
        imgFront.src = product.frontViewImg;
        imgBack.src = product.backViewImg;

        // Generate matching color picker swatches dynamically
        swatchesBox.innerHTML = '';
        product.finishes.forEach((finish, entryIndex) => {
            const circle = document.createElement('div');
            circle.className = `swatch ${entryIndex === 0 ? 'active' : ''}`;
            circle.style.background = finish.hex;
            circle.setAttribute('data-label', finish.label);

            // Click listener for within-device color variations
            circle.addEventListener('click', () => {
                document.querySelectorAll('.swatch').forEach(sw => sw.classList.remove('active'));
                circle.classList.add('active');
                colorNameLabel.textContent = finish.label;
            });

            swatchesBox.appendChild(circle);
        });

        // Initialize label settings cleanly
        colorNameLabel.textContent = product.finishes[0].label;

        // Reset image position metrics smoothly
        imgFront.style.opacity = '1';
        imgBack.style.opacity = '1';
        imgFront.style.transform = '';
        imgBack.style.transform = '';
    }, 400);
}

// Map event selectors over operational selector cards
selectionCards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('active')) return;

        selectionCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const modelKey = card.getAttribute('data-model');
        switchDeviceDashboard(modelKey);
    });
});