// Booking Component Module

import { contactInfo } from '../../data/content.js';
import { getIcon, showToast } from '../utils/dom.js';
import { validateEmail, validatePhone, validateRequired, getFormData, resetForm, clearAllErrors } from '../utils/form.js';

export function initBooking() {
    renderContactInfo();
    
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearAllErrors(form);
        
        const data = getFormData(form);
        
        // Validate
        let isValid = true;
        
        if (!validateRequired(data.name)) {
            isValid = false;
        }
        
        if (!validatePhone(data.phone)) {
            isValid = false;
        }
        
        if (!validateEmail(data.email)) {
            isValid = false;
        }
        
        if (!validateRequired(data.date)) {
            isValid = false;
        }
        
        if (!validateRequired(data.time)) {
            isValid = false;
        }
        
        if (!validateRequired(data.passengers)) {
            isValid = false;
        }
        
        if (isValid) {
            console.log('Form submitted:', data);
            showToast('預訂已送出', '我們將盡快與您聯繫，感謝您的預訂！');
            resetForm(form);
        } else {
            showToast('請檢查表單', '請填寫所有必填欄位');
        }
    });
}

function renderContactInfo() {
    const contactInfoContainer = document.getElementById('contact-info');
    if (!contactInfoContainer) return;
    
    contactInfo.forEach(info => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';
        
        infoItem.innerHTML = `
            <div class="info-icon">${getIcon(info.icon)}</div>
            <div class="info-content">
                <h4>${info.title}</h4>
                <p>${info.content}</p>
            </div>
        `;
        
        contactInfoContainer.appendChild(infoItem);
    });
}
