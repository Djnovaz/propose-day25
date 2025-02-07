const messages = [
    "Are you sure my dear princess?",
    "Really sure ahh??",
    "Are you positive about it ma?",
    "Please princess ma...",
    "Just think about it again ma!",
    "If you say no, I will be really sad papa...",
    "I will be very sad papa...",
    "I will be very very very sad papa...",
    "Ok fine, I will stop asking ma...",
    "Just kidding, say yes please princess! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change No button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Change No button color temporarily
    noButton.style.backgroundColor = "#ff0000"; 
    setTimeout(() => {
        noButton.style.backgroundColor = "#f44336";
    }, 500);

    // Move No button randomly
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
    noButton.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
}

function handleYesClick() {
    const yesButton = document.querySelector('.yes-button');

    // Change Yes button color temporarily
    yesButton.style.backgroundColor = "#00cc66";
    setTimeout(() => {
        yesButton.style.backgroundColor = "#4caf50";
        window.location.href = "yes.html";
    }, 500);
}
