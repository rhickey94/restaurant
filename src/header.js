function header() {
  const NAV_ITEMS = ["Home", "Menu", "Contact"];

  const header = document.createElement("header");

  const tagline = document.createElement("div");
  tagline.setAttribute("id", "header");
  tagline.innerHTML = "Restaurant!";

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  for (let i = 0; i < NAV_ITEMS.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = NAV_ITEMS[i];
    ul.appendChild(li);
  }
  nav.appendChild(ul);

  header.appendChild(tagline);
  header.appendChild(nav);

  return header;
}

export default header;
