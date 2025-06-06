//updating cards with animation

function updateContent(hiragana, romanji, img, word) {
    const elements = [
        document.getElementById('main-character'),
        document.getElementById('reading'),
        document.getElementById('image'),
        document.getElementById('word')
    ];

    // Add fade-out effect
    elements.forEach(el => {
    el.classList.remove('visible'); // Ensure previous fade-in class is removed
    el.classList.add('fade');
});

    setTimeout(() => {
        // Update content after fade-out
        document.getElementById('main-character').textContent = hiragana;
        document.getElementById('reading').textContent = romanji;
        document.getElementById('image').src = img;
        document.getElementById('image').alt = word;
        document.getElementById('word').textContent = word;
        setTimeout(() => {
                elements.forEach(el => {
                el.classList.remove('fade');
                el.classList.add('visible');
            });
        }, 300);
    }, 100);
}

// switching pages


let currentIndex = 0;
const containers = document.querySelectorAll('.button-container');

function showContainer(index) {
    // Hide all containers
    containers.forEach(container => container.classList.remove('active'));

    // Show only the selected container
    if (containers[index]) {
        containers[index].classList.add('active');
    }
    updateCounter(index);
}

function nextContainer() {
    currentIndex = (currentIndex + 1) % containers.length;
    showContainer(currentIndex);
}

function prevContainer() {
    currentIndex = (currentIndex - 1 + containers.length) % containers.length;
    showContainer(currentIndex);
}

function updateCounter(index) {
    counter.textContent = `${index + 1}/9`; // Adjust index for display
}

// Show the first container initially
showContainer(currentIndex);

//made with help of chatGPT





