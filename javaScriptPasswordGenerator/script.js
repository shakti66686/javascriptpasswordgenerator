let inputBox = document.getElementById("password-box");
let copyBtn = document.getElementById("btn");
let genBtn = document.getElementById("btn-generate");

function generatePassword() {
  let password = "";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = "abcdefghijklmnopqrstuvwxyz";
  let symbol = "!@#$%^&&*(()_+";
  let number = "123456789";
  if (document.getElementById("uppercase").checked) {
    password += upper;
  }
  if (document.getElementById("lowercase").checked) {
    password += small;
  }
  if (document.getElementById("number").checked) {
    password += number;
  }
  if (document.getElementById("symbol").checked) {
    password += symbol;
  }
  let genPassword = "";
  let length = document.getElementById("range").value;

  if (length < 1 || password.length === 0) {
    return;
  }
  for (let i = 0; i < length; i++) {
    const element = Math.floor(Math.random() * password.length);
    genPassword += password[element];
    console.log(length);
  }
  inputBox.value = genPassword;
}
[...document.querySelectorAll('input[type="checkbox"]')].forEach((elem) => {
  elem.addEventListener("click", generatePassword);
});
genBtn.addEventListener("click", generatePassword);

document.getElementById("range").addEventListener("input", (e) => {
  document.getElementById("span").textContent = e.target.value;

  generatePassword();
});
copyBtn.addEventListener("click", function () {
  let pass = inputBox.value;
  navigator.clipboard.writeText(pass).then(() => {
    copyBtn.innerHTML = "copied!";
    setTimeout(() => {
      copyBtn.innerHTML = "copy";
    }, 2000);
  });
});
generatePassword();
