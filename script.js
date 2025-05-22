const correctPassword = "mermaid"; // 👈 Change this to your chosen password

function checkPassword() {
  const userInput = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-message");
  if (userInput === correctPassword) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("content-container").style.display = "block";
  } else {
    errorMsg.textContent = "Incorrect password. Try again.";
    errorMsg.style.color = "red";
  }
}
function checkSecret(event) {
  if (event.key === "Enter") {
    const input = event.target.value.trim();
    if (input.toLowerCase() === "labubu") {
      document.getElementById("secret-section").style.display = "block";
      event.target.style.display = "none"; // Optional: hide input after success
    } else {
      alert("Incorrect secret code.");
    }
  }
}
// Detect Shift + S to show secret code input
document.addEventListener("keydown", function(event) {
  if (event.shiftKey && event.key.toLowerCase() === "m") {
    const input = document.getElementById("secret-code");
    input.style.display = "block";
    input.focus();
  }
});