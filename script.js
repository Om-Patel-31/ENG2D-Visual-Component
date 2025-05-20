document.addEventListener("DOMContentLoaded", function () {
  const chip = document.getElementById("chip");
  const chipImage = chip.querySelector("img");
  const chipMessage = chip.querySelector(".chip-message");
  const chipSound = document.getElementById("chip-sound");

  chip.addEventListener("click", () => {
  if (chipSound) {
    chipSound.currentTime = 0;
    chipSound.play();
  }

  chip.style.transform = "scale(2.3)";
  chip.style.transition = "transform 0.4s ease-out";

  setTimeout(() => {
    chipMessage.textContent = "Access Granted.";
    chipMessage.style.opacity = "1";

    // ✅ Enable scrolling
    document.body.classList.remove("lock-scroll");
  }, 400);

  setTimeout(() => {
    chip.style.transform = "scale(1)";
    chipMessage.style.opacity = "0";
    chipMessage.textContent = "";
  }, 2000);
});

const sentences = [
  "The obsidian-black garment endowed my avatar with the godlike powers Halliday’s own avatar had once possessed.",
  "My pulse suddenly thudding in my ears, I immediately logged out of the OASIS and scrambled out of my rig.",
  "It would’ve been like passing up the chance to be the first person to walk on the moon.",
  "The employees I encountered as I hurried back upstairs were treated to the sight of their wild-eyed boss sprinting through the hallowed halls of Gregarious Simulation Systems, clutching a giant silver egg.",
  "Now we can plug right in to the old noodle.",
  "The ONI is the most powerful communication tool humans have ever invented. And I think it’s also probably the last one we will ever need to invent.",
  "My heart had been thudding against my rib cage, but now it almost stopped.",
  "I glanced around the cluttered study. Here, just over a week ago, Anorak had declared me the winner of Halliday’s contest and changed my life forever.",
  "Once Pandora’s box has been opened, there’s no closing it again.",
  "It looked identical to the virtual egg on display in Anorak’s study, except this one had no inscription on its surface."
];

let currentIndex = 0;
const sentenceText = document.getElementById("sentence-text");
const sentenceNumber = document.getElementById("sentence-number");

document.getElementById("prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSentence();
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < sentences.length - 1) {
    currentIndex++;
    updateSentence();
  }
});

function updateSentence() {
  sentenceText.textContent = sentences[currentIndex];
  sentenceNumber.textContent = currentIndex + 1;
}});