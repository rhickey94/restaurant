import chef from "../images/chef.jpg"
import owner from "../images/owner.jpg"

function contact() {
  const section = document.createElement("section");
  const articleOne = buildArticle("henlo", chef, "Chef");
  const articleTwo = buildArticle("henlo!!!", owner, "Master Chef");

  section.appendChild(articleOne);
  section.appendChild(articleTwo);

  return section;
}

function buildArticle(text, image, title) {
  const article = document.createElement("article");

  const figure = buildFigure(text, image, title);
  article.appendChild(figure);

  return article;
}

function buildFigure(text, image, title) {
  const figure = document.createElement("figure");

  const div = document.createElement("div");

  const figcap = document.createElement("figcaption");
  figcap.textContent = title;

  const span = document.createElement("span");
  span.textContent = getBlurb(text);

  const img = buildImage(image);
  div.appendChild(img);
  div.appendChild(figcap);

  figure.appendChild(div);
  figure.appendChild(span);

  return figure;
}

function buildImage(img) {
  const myImg = new Image();
  myImg.src = img;
  myImg.alt = "bruh";

  return myImg;
}

function getBlurb(text) {
  let _text = text;
  return _text;
}

export default contact;
