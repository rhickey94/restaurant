function menu() {
  const section = document.createElement("section");

  section.appendChild(appetizers());

  return section;
}

function appetizers() {
  const appetizers = ["shrimp", "beef", "chicken"];

  const article = document.createElement("article");
  const articleHeading = document.createElement("h3");
  const itemList = document.createElement("ul");
  appetizers.forEach((appetizer) => {
    const li = document.createElement("li");
    li.textContent = appetizer;

    itemList.appendChild(li);
  });

  article.appendChild(articleHeading);
  article.appendChild(itemList);

  return article;
}

export default menu;
