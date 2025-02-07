let celebrateSound = new Audio("celebrate.mp3");
celebrateSound.volume = 0.5; // Default volume
let isSoundOn = true; // Track sound state

// Function to toggle celebrate sound on/off
function toggleCelebrateSound() {
    isSoundOn = !isSoundOn; // Toggle sound state

    // Set muted property based on toggle state
    celebrateSound.muted = !isSoundOn;

    // Update button text
    document.querySelector(".mute-button").textContent = isSoundOn ? "🔊 Sound On" : "🔇 Sound Off";
}

// Celebrate function (plays sound only if sound is ON)
function celebrate() {
    if (isSoundOn) {
        celebrateSound.currentTime = 0; // Reset sound to play again
        celebrateSound.play();
    }
    
    // Change the background color
    document.body.style.background = "linear-gradient(135deg, #ff66b2, #ff4081)";

    // Create confetti and hearts
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);

        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        setTimeout(() => confetti.remove(), 5000);
    }

    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        setTimeout(() => heart.remove(), 5000);
    }
}

// Function to go back
function goBack() {
    window.location.href = "index.html";
}
