// Main Entry Point

import { initNavbar } from './components/navbar.js';
import { initHero } from './components/hero.js';
import { renderServices } from './components/services.js';
import { renderFleet } from './components/fleet.js';
import { renderPackages } from './components/packages.js';
import { initBooking } from './components/booking.js';
import { renderFooter } from './components/footer.js';
import { initScrollReveal } from './utils/scroll.js';

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Luxury Charter Travel - Initializing...');
    
    // Initialize components
    initNavbar();
    initHero();
    renderServices();
    renderFleet();
    renderPackages();
    initBooking();
    renderFooter();
    
    // Initialize scroll animations
    initScrollReveal();
    
    console.log('Luxury Charter Travel - Ready!');
});
