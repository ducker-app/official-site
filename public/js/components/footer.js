// Footer Component Module

import { socialLinks, footerLinks, legalLinks, contactInfo } from '../../data/content.js';
import { getIcon } from '../utils/dom.js';
import { smoothScrollTo } from '../utils/scroll.js';

export function renderFooter() {
    renderSocialLinks();
    renderFooterNav();
    renderFooterContact();
    renderFooterLegal();
    renderCopyright();
}

function renderSocialLinks() {
    const socialContainer = document.getElementById('social-links');
    if (!socialContainer) return;
    
    socialLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.className = 'social-link hover-lift';
        anchor.setAttribute('aria-label', link.name);
        anchor.setAttribute('data-testid', `link-${link.icon}`);
        anchor.innerHTML = getIcon(link.icon);
        socialContainer.appendChild(anchor);
    });
}

function renderFooterNav() {
    const navContainer = document.getElementById('footer-nav-links');
    if (!navContainer) return;
    
    footerLinks.forEach(link => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.className = 'footer-link hover-underline';
        anchor.textContent = link.text;
        anchor.setAttribute('data-testid', `link-${link.url.replace('#', '')}`);
        
        if (link.url.startsWith('#')) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                smoothScrollTo(link.url);
            });
        }
        
        li.appendChild(anchor);
        navContainer.appendChild(li);
    });
}

function renderFooterContact() {
    const contactContainer = document.getElementById('footer-contact');
    if (!contactContainer) return;
    
    const phoneInfo = contactInfo.find(info => info.icon === 'phone');
    const emailInfo = contactInfo.find(info => info.icon === 'mail');
    
    if (phoneInfo) {
        const phoneDiv = document.createElement('div');
        phoneDiv.className = 'footer-contact';
        phoneDiv.innerHTML = `
            <p>24小時服務專線</p>
            <p class="footer-contact-value">${phoneInfo.content}</p>
        `;
        contactContainer.appendChild(phoneDiv);
    }
    
    if (emailInfo) {
        const emailDiv = document.createElement('div');
        emailDiv.className = 'footer-contact';
        emailDiv.innerHTML = `
            <p class="mt-2">電子郵件</p>
            <p class="footer-contact-value">${emailInfo.content}</p>
        `;
        contactContainer.appendChild(emailDiv);
    }
}

function renderFooterLegal() {
    const legalContainer = document.getElementById('footer-legal-links');
    if (!legalContainer) return;
    
    legalLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.className = 'footer-legal-link';
        anchor.textContent = link.text;
        anchor.setAttribute('data-testid', `link-${link.text === '隱私權政策' ? 'privacy' : 'terms'}`);
        legalContainer.appendChild(anchor);
    });
}

function renderCopyright() {
    const copyrightElement = document.querySelector('.footer-copyright');
    if (!copyrightElement) return;
    
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} 尊榮包車旅遊服務. All rights reserved.`;
}
