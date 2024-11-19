document.addEventListener("DOMContentLoaded", () => {
    function loadGameContainer() {
        const isDesktop = !/Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
        if (!isDesktop) {
            alert("Error: This game is only supported on desktop.");
            return;
        }
        const gameContainer = document.getElementById("gameContainer");
        gameContainer.style.display = "flex";
        document.getElementsByClassName("scribbleContainer")[0].style.display = "none";

        const iframe = document.createElement("iframe");
        iframe.src = "https://cavemanhitsgiraffe.martengierth.de/game/";
        iframe.width = "1280";
        iframe.height = "960";
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        gameContainer.appendChild(iframe);
    }

    // Globale Funktion verfügbar machen
    window.loadGameContainer = loadGameContainer;
});

document.addEventListener("DOMContentLoaded", () => {
    const tiltedText = document.querySelectorAll('.tilted-text');

    tiltedText.forEach(element => {
        element.innerHTML = element.textContent
            .split('')
            .map(char => {
                const randomTilt = Math.floor(Math.random() * 11) - 5; // Random between -5 and 5
                return char === ' '
                    ? `<span class="space">${char}</span>`
                    : `<span style="--tilt-angle: ${randomTilt};">${char}</span>`;
            })
            .join('');
    });
});