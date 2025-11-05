// Navbar Component Module

import { smoothScrollTo, onScroll, getScrollPosition } from '../utils/scroll.js';

export function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.querySelector('.navbar-mobile-menu');
    const mobileToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelectorAll('.navbar-link, .navbar-mobile-link');
    const navButtons = document.querySelectorAll('[data-testid="button-book-nav"], [data-testid="button-mobile-book"]');
    const logo = document.querySelector('.navbar-logo');
    
    // Handle scroll effect
    onScroll(() => {
        if (getScrollPosition() > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    
    // Logo click - scroll to top
    logo.addEventListener('click', () => {
        smoothScrollTo('#hero');
        mobileMenu.classList.remove('active');
    });
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
            mobileMenu.classList.remove('active');
        });
    });
    
    // Book now buttons in navbar
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            smoothScrollTo('#booking');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    });
}
