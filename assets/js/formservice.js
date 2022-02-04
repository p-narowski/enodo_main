const emailTag = document.getElementById("email");
const nameTag = document.getElementById("name");
const messageTag = document.getElementById("message");
const warning = document.getElementById("warning");
const WARNING_MESSAGE = "Wszystkie pola formularza są obowiązkowe.";
const SUCCESS_MESSAGE = "Wiadomość została wysłana. Dziękuję!";

function validateForm() {
  if (
    emailTag.value === "" ||
    !emailTag.value.includes("@") ||
    nameTag.value === "" ||
    messageTag.value === ""
  ) {
    alert(WARNING_MESSAGE);
  } else {
    submitForm();
    alert(SUCCESS_MESSAGE)
    location.reload();
  }
}

function submitForm() {
    fetch("https://formsubmit.co/ajax/info@e-nodo.pl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        formType: "Contact",
        name: `${nameTag.value}`,
        email: `${emailTag.value}`,
        message: `${messageTag.value}`,
        _captcha: "false"
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
