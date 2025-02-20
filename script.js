const results = document.getElementById("results-div");

const clear = document.getElementById("clear-btn");
clear.addEventListener("click", () => {results.textContent = "";})

const phoneNumber = new Set(["1 555-555-5555", "1 (555) 555-5555", "5555555555", "555-555-5555", "(555)555-5555", "1(555)555-5555", "1 555 555 5555", "1 456 789 4444"]);

const validateNumber = () => {
  const number = document.getElementById("user-input").value.trim();
  if(!number){
  alert("Please provide a phone number");
  return;
}
else if(phoneNumber.has(number)){
  results.textContent = `Valid US number: ${number}`;
}
else {
  results.textContent = `Invalid US number: ${number}`;
}
}
