function homepage() {
  const section = document.createElement("section");

  section.appendChild(sectionHeader());
  section.appendChild(reviewArticle());
  section.appendChild(hoursArticle());
  section.appendChild(address());

  return section;
}

function sectionHeader() {
  const sectionHeader = document.createElement("h1");
  sectionHeader.textContent = "Restaurant for eating!";

  return sectionHeader;
}

function reviewArticle() {
  const reviewArticle = document.createElement("article");
  const reviewArticlePara = document.createElement("p");

  const reviewArticleContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ratione, deserunt commodi
  quam ducimus a eos ipsam tenetur quo ex, fugit mollitia dolores, quis esse sed nam sit
  debitis dicta quos distinctio. Totam at exercitationem nulla libero facilis inventore
  earum! Recusandae fugit in debitis et numquam ipsa minus non labore.`;

  reviewArticlePara.textContent = reviewArticleContent;
  reviewArticle.appendChild(reviewArticlePara);

  return reviewArticle;
}

function hoursArticle() {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const hoursArticle = document.createElement("article");

  const hoursHeader = document.createElement("h3");
  hoursHeader.textContent = "Hours";

  hoursArticle.appendChild(hoursHeader);

  const hoursList = document.createElement("ul");
  daysOfTheWeek.forEach((day) => {
    const li = document.createElement("li");
    li.textContent = `${day}: 8am - 8pm`;

    hoursList.appendChild(li);
  });

  hoursArticle.appendChild(hoursList);

  return hoursArticle;
}

function address() {
  const address = document.createElement("address");

  const addressHeader = document.createElement("h3");
  addressHeader.textContent = "Location";

  address.appendChild(addressHeader);

  const addressPara = document.createElement("p");
  addressPara.textContent = "123 Yum St, Yumsville, NY";

  address.appendChild(addressPara);

  return address;
}

export default homepage;
