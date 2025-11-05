// Hero Component Module

import { smoothScrollTo } from '../utils/scroll.js';

export function initHero() {
    const bookNowBtn = document.querySelector('[data-testid="button-book-now"]');
    const viewFleetBtn = document.querySelector('[data-testid="button-view-fleet"]');
    
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', () => {
            console.log('Book Now clicked');
            smoothScrollTo('#booking');
        });
    }
    
    if (viewFleetBtn) {
        viewFleetBtn.addEventListener('click', () => {
            console.log('View Fleet clicked');
            smoothScrollTo('#fleet');
        });
    }
}
