const sentences = [
  "Practice makes perfect.",
  "Speed is nothing without accuracy.",
  "Typing is an essential computer skill.",
  "The quick brown fox jumps over the lazy dog.",
  "Every expert was once a beginner."
];

let selectedSentence = "";
let startTime = 0;

function startTest() {
  selectedSentence = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("sentence").textContent = selectedSentence;
  document.getElementById("input").value = "";
  document.getElementById("input").disabled = false;
  document.getElementById("input").focus();
  document.getElementById("result").textContent = "";
  startTime = new Date().getTime();
}

function resetTest() {
  document.getElementById("input").value = "";
  document.getElementById("input").disabled = true;
  document.getElementById("sentence").textContent = "Click \"Start\" to begin!";
  document.getElementById("result").textContent = "";
}

document.getElementById("input").addEventListener("input", () => {
  const currentText = document.getElementById("input").value.trim();
  if (currentText === selectedSentence) {
    const endTime = new Date().getTime();
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // seconds
    const words = selectedSentence.split(" ").length;
    const wpm = Math.round((words / timeTaken) * 60);

    document.getElementById("result").innerHTML = `
      ✅ Your speed: <strong>${wpm} WPM</strong><br>
      🕒 Time taken: <strong>${timeTaken} seconds</strong>
    `;
    document.getElementById("input").disabled = true;
  }
});
