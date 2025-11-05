// Fleet Component Module

import { vehicles } from '../../data/content.js';
import { createElement, getIcon } from '../utils/dom.js';

export function renderFleet() {
    const fleetGrid = document.getElementById('fleet-grid');
    if (!fleetGrid) return;
    
    vehicles.forEach((vehicle, index) => {
        const fleetCard = createElement('div', 'fleet-card scroll-reveal-stagger', {
            'data-testid': `card-vehicle-${index}`
        });
        
        fleetCard.innerHTML = `
            <div class="fleet-image-wrapper">
                <img src="${vehicle.image}" alt="${vehicle.name}" class="fleet-image">
                <div class="fleet-overlay">
                    <span class="fleet-badge">查看詳情</span>
                </div>
            </div>
            <div class="fleet-info">
                <h3 class="fleet-name-zh">${vehicle.nameZh}</h3>
                <p class="fleet-name-en">${vehicle.name}</p>
                <div class="fleet-capacity">
                    ${getIcon('users')}
                    <span>最多 ${vehicle.capacity} 人</span>
                </div>
            </div>
        `;
        
        fleetGrid.appendChild(fleetCard);
    });
}
