import "./style.css";
import header from "./header";
import background from "./background";
import homepage from "./homepage";
import footer from "./footer";

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
      break;
    case "Contact":
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
