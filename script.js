const form = document.getElementById("regForm");
const liveRegion = document.getElementById("live");

function validateForm(data) {
  let valid = true;

  // Clear old errors
  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  if (!data.first) {
    document.getElementById("err-first").textContent = "First name is required.";
    valid = false;
  }

  if (!data.last) {
    document.getElementById("err-last").textContent = "Last name is required.";
    valid = false;
  }

  // ✅ Fixed email regex
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (!emailOk) {
    document.getElementById("err-email").textContent = "Please enter a valid email.";
    valid = false;
  }

  if (!data.prog) {
    document.getElementById("err-prog").textContent = "Programme is required.";
    valid = false;
  }

  if (!data.year) {
    document.getElementById("err-year").textContent = "Year is required.";
    valid = false;
  }

  if (!valid) {
    liveRegion.textContent = "Fix errors before submitting.";
  } else {
    liveRegion.textContent = "";
  }

  return valid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {
    first: document.getElementById("first").value.trim(),
    last: document.getElementById("last").value.trim(),
    email: document.getElementById("email").value.trim(),
    prog: document.getElementById("prog").value.trim(),
    year: form.year.value,
    interests: document.getElementById("interests").value.split(",").map(s => s.trim()).filter(Boolean),
    photo: document.getElementById("photo").value.trim()
  };

  if (!validateForm(formData)) return;

  addEntry(formData);
  form.reset();
});

// Create card + table row
function addEntry(data) {
  // Card
  const card = document.createElement("div");
  card.className = "card-person";
  card.innerHTML = `
    <img src="${data.photo || "https://placehold.co/128"}" alt="Profile photo">
    <h3>${data.first} ${data.last}</h3>
    <p><span class="badge">${data.prog}</span> - Year ${data.year}</p>
    <p>${(data.interests || []).join(", ")}</p>
    <button class="remove-btn">Remove</button>
  `;

  document.getElementById("cards").prepend(card);

  // Table row
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${data.first} ${data.last}</td>
    <td>${data.prog}</td>
    <td>${data.year}</td>
    <td>${(data.interests || []).join(", ")}</td>
    <td><button class="remove-btn">Remove</button></td>
  `;
  document.querySelector("#summary tbody").prepend(tr);

  // Remove functionality
  card.querySelector(".remove-btn").addEventListener("click", () => {
    card.remove();
    tr.remove();
  });
  tr.querySelector(".remove-btn").addEventListener("click", () => {
    card.remove();
    tr.remove();
  });
}
