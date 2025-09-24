// 🎲 Dice images
const diceImages = [
  { src: "dice1.png", alt: "dice1" },
  { src: "dice2.png", alt: "dice2" },
  { src: "dice3.png", alt: "dice3" },
  { src: "dice4.png", alt: "dice4" },
  { src: "dice5.png", alt: "dice5" },
  { src: "dice6.png", alt: "dice6" },
];

// 🎵 Sounds
const diceSound = new Audio("roll.wav");
const winSound = new Audio("win.mp3");
const drawSound = new Audio("draw.mp3");

// 🎯 Select elements
const firstImage = document.getElementById("firstImage");
const secondImage = document.getElementById("secondImage");
const winnerText = document.getElementById("winner");
const playButton = document.getElementById("playButton");

// 🎲 Roll Dice Function
function rollDice() {
  // Play dice roll sound
  diceSound.currentTime = 0;
  diceSound.play();

  // Add shake animation
  firstImage.classList.add("shake");
  secondImage.classList.add("shake");

  setTimeout(() => {
    // Random numbers
    let dice1 = Math.floor(Math.random() * 6);
    let dice2 = Math.floor(Math.random() * 6);

    // Update dice images
    firstImage.src = diceImages[dice1].src;
    firstImage.alt = diceImages[dice1].alt;
    secondImage.src = diceImages[dice2].src;
    secondImage.alt = diceImages[dice2].alt;

    // Remove shake animation
    firstImage.classList.remove("shake");
    secondImage.classList.remove("shake");

    // Decide winner
    if (dice1 > dice2) {
      winnerText.textContent = "🎉 Player One Wins!";
      winnerText.style.color = "#06d6a0";
      winSound.play();
    } else if (dice2 > dice1) {
      winnerText.textContent = "🎉 Computer Wins!";
      winnerText.style.color = "#ffd166";
      winSound.play();
    } else {
      winnerText.textContent = "🤝 It's a Draw!";
      winnerText.style.color = "#ef476f";
      drawSound.play();
    }
  }, 1000); // matches dice shake duration
}

// 🎮 Event listener
playButton.addEventListener("click", rollDice);
