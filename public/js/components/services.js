// Services Component Module

import { services } from '../../data/content.js';
import { createElement, getIcon } from '../utils/dom.js';

export function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    services.forEach((service, index) => {
        const serviceCard = createElement('div', 'service-card scroll-reveal-stagger hover-lift', {
            'data-testid': `card-service-${index}`
        });
        
        serviceCard.innerHTML = `
            <div class="service-icon">
                ${getIcon(service.icon)}
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-title-en">${service.titleEn}</p>
            <p class="service-description">${service.description}</p>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}
