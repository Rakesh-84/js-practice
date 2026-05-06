// 1. Grab all three elements
const input = document.getElementById("metric-input");
const btn = document.getElementById("add-card-btn");
const container = document.getElementById("cards-container");

// 2. Listen for button click
btn.addEventListener("click", function() {

  // 3. Create a new div
  const card = document.createElement("div");

  // 4. Set its text to whatever user typed
  card.textContent = input.value;

  // 5. Add class "kpi-card" to it
  card.classList.add("kpi-card");

  // 6. Append it to container
  container.appendChild(card);

  // 7. Clear the input
  input.value = "";
});