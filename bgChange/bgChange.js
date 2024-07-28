let colorInterval;

const randomColor = function() {
    const hex = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const startChangingColor = function() {
    if (!colorInterval) {
        colorInterval = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000); // Change color every second
    }
};

const stopChangingColor = function() {
    clearInterval(colorInterval);
    colorInterval = null;// this is used for cleanup
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
