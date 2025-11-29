
document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderInput = document.getElementById('card-holder');
    const expiryDatePicker = document.getElementById('expiry-date-picker');
    const cvvInput = document.getElementById('cvv');
    const submitButton = document.querySelector('button[type="submit"]');

    const cardNumberError = document.getElementById('card-number-error');
    const cardHolderError = document.getElementById('card-holder-error');
    const expiryDateError = document.getElementById('expiry-date-error');
    const cvvError = document.getElementById('cvv-error');

    const showError = (element, message) => {
        element.textContent = message;
        element.classList.add('show');
    };

    const hideError = (element) => {
        element.textContent = '';
        element.classList.remove('show');
    };

    const validateCardNumber = (value) => {
        if (value === '') {
            return 'Card number is required';
        }
        if (!/^\d+$/.test(value)) {
            return 'Card number must contain only digits';
        }
        if (value.length !== 16) {
            return 'Card number must be exactly 16 digits';
        }
        // Luhn algorithm for basic validation
        let sum = 0;
        let shouldDouble = false;
        for (let i = value.length - 1; i >= 0; i--) {
            let digit = parseInt(value.charAt(i), 10);
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        if (sum % 10 !== 0) {
            return 'Invalid card number';
        }
        return '';
    };

    const validateCardHolder = (value) => {
        if (value.trim() === '') {
            return 'Card holder name is required';
        }
        if (value.length < 2) {
            return 'Card holder name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s]+$/.test(value)) {
            return 'Card holder name can only contain letters and spaces';
        }
        return '';
    };

    const validateExpiryDate = (value) => {
        if (value === '') {
            return 'Expiry date is required';
        }
        const selectedDate = new Date(value + '-01');
        const currentDate = new Date();
        currentDate.setDate(1);
        if (selectedDate < currentDate) {
            return 'Expiry date cannot be in the past';
        }
        return '';
    };

    const validateCVV = (value) => {
        if (value === '') {
            return 'CVV is required';
        }
        if (!/^\d+$/.test(value)) {
            return 'CVV must contain only digits';
        }
        if (value.length !== 3) {
            return 'CVV must be exactly 3 digits';
        }
        return '';
    };

    const validate = () => {
        let isValid = true;

        // Card Number Validation
        const cardNumberErrorMsg = validateCardNumber(cardNumberInput.value);
        if (cardNumberErrorMsg) {
            showError(cardNumberError, cardNumberErrorMsg);
            cardNumberInput.classList.add('invalid');
            isValid = false;
        } else {
            hideError(cardNumberError);
            cardNumberInput.classList.remove('invalid');
        }

        // Card Holder Validation
        const cardHolderErrorMsg = validateCardHolder(cardHolderInput.value);
        if (cardHolderErrorMsg) {
            showError(cardHolderError, cardHolderErrorMsg);
            cardHolderInput.classList.add('invalid');
            isValid = false;
        } else {
            hideError(cardHolderError);
            cardHolderInput.classList.remove('invalid');
        }

        // Expiry Date Validation
        const expiryDateErrorMsg = validateExpiryDate(expiryDatePicker.value);
        if (expiryDateErrorMsg) {
            showError(expiryDateError, expiryDateErrorMsg);
            expiryDatePicker.classList.add('invalid');
            isValid = false;
        } else {
            hideError(expiryDateError);
            expiryDatePicker.classList.remove('invalid');
        }

        // CVV Validation
        const cvvErrorMsg = validateCVV(cvvInput.value);
        if (cvvErrorMsg) {
            showError(cvvError, cvvErrorMsg);
            cvvInput.classList.add('invalid');
            isValid = false;
        } else {
            hideError(cvvError);
            cvvInput.classList.remove('invalid');
        }

        return isValid;
    };

    submitButton.addEventListener('click', () => {
        validate();
    });
});
