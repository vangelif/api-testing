const mtgContainer = document.getElementById("box");
const mtg_api = `https://api.magicthegathering.io/v1/cards`;
const numOfCards = 20;
const getMtgCards = async () => {
  for (let i = 1; i <= numOfCards; i++) {
    const response = await fetch(`${mtg_api}/${i}`);
    const data = await response.json();
    // first access the card object
    const { card } = data;
    console.log(card);
    // then access the nested properties
    const { name, imageUrl } = card;
    console.log(name);
    console.log(imageUrl);

    // create a div
    const mtgElement = document.createElement("div");
    mtgElement.classList.add("card");
    mtgElement.innerHTML = `
      <p>${name}</p>
      <img src="${imageUrl}">

      </div>`;
    mtgContainer.appendChild(mtgElement);
  }
};
getMtgCards();

