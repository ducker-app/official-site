// Form Utility Functions

export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 8;
}

export function validateRequired(value) {
    return value && value.trim().length > 0;
}

export function getFormData(form) {
    const formData = new FormData(form);
    const data = {};
    
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    return data;
}

export function resetForm(form) {
    form.reset();
}

export function showFieldError(field, message) {
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error text-xs text-red-500 mt-1';
    errorElement.textContent = message;
    field.parentElement.appendChild(errorElement);
    field.classList.add('border-red-500');
}

export function clearFieldError(field) {
    const error = field.parentElement.querySelector('.field-error');
    if (error) {
        error.remove();
    }
    field.classList.remove('border-red-500');
}

export function clearAllErrors(form) {
    const errors = form.querySelectorAll('.field-error');
    errors.forEach(error => error.remove());
    
    const errorFields = form.querySelectorAll('.border-red-500');
    errorFields.forEach(field => field.classList.remove('border-red-500'));
}
