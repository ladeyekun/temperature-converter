'use script';

const input = document.querySelector('.temperature');
const convert = document.querySelector('.convert');
const output = document.querySelector('.result p');
const themeToggler = document.querySelector('.background-toggler');
const body = document.querySelector('body');

convert.addEventListener('click', function() {
    let data = input.value.trim();
    const unit = document.querySelector('input[name="unit"]:checked');
    let temperatureUnit = unit.value.toLowerCase();

    if (isNumber(data)) {
        let temp = parseFloat(data);
        let result = 0;
        let symbol = '';
        
        switch (temperatureUnit) {
            case 'fahrenheit':
                symbol = 'C';
                result = calculateFahrenheit(temp);
                break;

            case 'celsius':
            default:
                symbol = 'F';
                result = calculateCelsius(temp);
                break;
        }

        output.innerHTML = 
            `${data}&deg;${symbol} = ${result.toFixed(1)}&deg;${invertSymbol(symbol)}`;
    } else {
        output.innerText = 'Enter a valid number';
    }
});

const invertSymbol = symbol => symbol === 'F' ? 'C' : 'F';

function isNumber(input) {
    if (input.length > 0 && !isNaN(input)) return true;
    return false;
}

function calculateFahrenheit(input) {
    return (input * 9 / 5) + 32;
}

function calculateCelsius(input) {
    return (input - 32) * 5 / 9;
}


themeToggler.addEventListener('click', function() {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggler.textContent = 'Light mode';
        themeToggler.classList.remove('light');
        themeToggler.classList.add('dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggler.textContent = 'Dark mode';
        themeToggler.classList.remove('dark');
        themeToggler.classList.add('light');
    }
});
