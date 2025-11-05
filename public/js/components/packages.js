// Packages Component Module

import { packages } from '../../data/content.js';
import { createElement, getIcon } from '../utils/dom.js';
import { smoothScrollTo } from '../utils/scroll.js';

export function renderPackages() {
    const packagesGrid = document.getElementById('packages-grid');
    if (!packagesGrid) return;
    
    packages.forEach((pkg, index) => {
        const packageCard = createElement('div', `package-card scroll-reveal-stagger ${pkg.featured ? 'featured' : ''}`, {
            'data-testid': `card-package-${index}`
        });
        
        let html = '';
        
        if (pkg.featured) {
            html += '<div class="package-badge">最受歡迎</div>';
        }
        
        html += `
            <div class="package-header">
                <h3 class="package-name">${pkg.name}</h3>
                <p class="package-name-en">${pkg.nameEn}</p>
                <p class="package-duration">${pkg.duration}</p>
            </div>
            <div class="package-price">
                <div class="package-price-amount">${pkg.price}</div>
            </div>
            <div class="package-features">
                ${pkg.features.map(feature => `
                    <div class="package-feature">
                        <div class="package-feature-icon">${getIcon('check')}</div>
                        <span class="package-feature-text">${feature}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn ${pkg.featured ? 'btn-primary' : 'btn-outline'} package-button" data-testid="button-select-package-${index}">
                選擇方案 / Select Plan
            </button>
        `;
        
        packageCard.innerHTML = html;
        packagesGrid.appendChild(packageCard);
        
        // Add click handler
        const button = packageCard.querySelector('button');
        button.addEventListener('click', () => {
            console.log(`Selected package: ${pkg.name}`);
            smoothScrollTo('#booking');
        });
    });
}
