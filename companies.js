const wealthElements = document.querySelectorAll('.wealth');
const kabanElements = document.querySelectorAll('.kaban');

const finalWealthValues = [
    [99300000000, 95000000000, 86000000000, 80000000000, 63000000000, 37000000000, 43000000000, 31000000000, 111000000000, 113000000000], // Wealth values for the first div
    [1866, 5000000, 6000000]   // Wealth values for the second div (for example)
];

const finalKabanValues = [
    [244700000, 8000000, 9000000], // Kaban values for the first div
    [10000000, 11000000, 12000000] // Kaban values for the second div (for example)
];

const animationDuration = 6000; // Duration of the animation in milliseconds
const delayBetweenDivs = 45000; // Delay between animations for different divs (30 seconds)

function animateElement(element, finalValue) {
    let start = 0;
    let startTime = null;

    function animation(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const progress = timestamp - startTime;
        const increment = Math.floor((finalValue / animationDuration) * progress);

        start += increment;
        element.textContent = '$' + start.toLocaleString();

        if (progress < animationDuration) {
            requestAnimationFrame(animation);
        } else {
            element.textContent = '$' + finalValue.toLocaleString();
        }
    }

    requestAnimationFrame(animation);
}

function animateSequentially(elements, values) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            animateElement(element, values[index]);
        }, index * delayBetweenDivs);
    });
}

// Start the animations for wealth elements in the first div
animateSequentially(wealthElements, finalWealthValues[0]);

// Delay the animations for kaban elements in the first div
setTimeout(() => {
    animateSequentially(kabanElements, finalKabanValues[0]);
}, delayBetweenDivs);
