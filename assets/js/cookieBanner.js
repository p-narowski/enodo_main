const HIDDEN_CLASS = "hidden";
const COOKIE_BOX_ID = "cookies-message";
const COOKIE_BUTTON_ID = "cookies-button";

const cookieBar = document.getElementById(COOKIE_BOX_ID);

function saveSelectionInStorage() {
  localStorage.setItem(COOKIE_BOX_ID, HIDDEN_CLASS);
}

function hideCookieBar() {
  cookieBar.classList.add(HIDDEN_CLASS);
  saveSelectionInStorage();
}
if (localStorage.getItem(COOKIE_BOX_ID)) {
  let storedClassName = localStorage.getItem(COOKIE_BOX_ID);
  cookieBar.classList.add(storedClassName);
}
