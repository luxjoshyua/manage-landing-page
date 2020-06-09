import style from "./sass/index.scss";

const signUpButton = document.getElementById("signup");
const submitBtn = document.querySelector(".contact-us");
submitBtn.addEventListener("click", (e) => {
  validateEmail();
  // e.preventDefault();
});

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRegex.test(emailInput.value)) {
    const errorDiv = document.createElement("div");
    document.querySelector(".signup").appendChild(errorDiv);
    errorDiv.innerHTML = "Woops, make sure it's a valid email please!";
    errorDiv.classList.add("email-error");
    emailInput.style.border = "1px solid #fb5859";
  } else {
    console.log("Email is correct!");
  }
}
