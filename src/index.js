import "./style.css";
import header from "./components/header";
import background from "./components/background";
import homepage from "./components/homepage";
import footer from "./components/footer";

import contact from "./components/contact"
import menu from "./components/menu"

function pageSetup(hook) {
  hook.appendChild(header());
  hook.appendChild(background());
  hook.appendChild(footer());
}

function selectModule(choice) {
  let selectedModule = null;

  switch (choice) {
    case "Home":
      selectedModule = homepage();
      break;
    case "Menu":
      selectedModule = menu();
      break;
    case "Contact":
      selectedModule = contact();
      break;
  }

  return selectedModule;
}

const hook = document.querySelector("#content");

pageSetup(hook);

const headerHook = document.querySelector("header");
const mainHook = document.querySelector("main");
const footerHook = document.querySelector("footer");

mainHook.appendChild(homepage());

const navLinks = headerHook.querySelectorAll("li");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mainHook.innerHTML = "";
    mainHook.appendChild(selectModule(e.target.textContent))
  });
});
