import style from "./sass/index.scss";

const submitBtn = document.querySelector("#submit-button");
submitBtn.addEventListener("click", (e) => {
  validateEmail();
});

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRegex.test(emailInput.value)) {
    const errorDiv = document.createElement("div");
    document.querySelector(".signup-outer").appendChild(errorDiv);
    errorDiv.innerHTML = "Woops, make sure it's a valid email please!";
    errorDiv.classList.add("email-error");
    emailInput.style.border = "1px solid #fb5859";
  } else {
    console.log("Email is correct!");
    emailInput.value = "";
    emailInput.placeholder = "Successfully signed up!";
  }
}
