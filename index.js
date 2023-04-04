// const fetch = require("node-fetch");
// const api_ais_url = `https://data.aishub.net/ws.php?username=A&format=B&output=C&compress=D&latmin=E&latmax=F&lonmin=G&lonmax=H&mmsi=I&imo=J&interval=K`;
// getShowById();
// const navitia_api = `https://api.navitia.io/v1/coverage/{regions.id}/stop_areas/{stop_areas.id}/arrivals`;
const pokemonContainer = document.getElementById("box");
const api_url = `https://pokeapi.co/api/v2/pokemon`;
const numOfPoke = 1;

const getPokemon = async () => {
  for (let i = 1; i <= numOfPoke; i++) {
    const response = await fetch(`${api_url}/${i}`);
    const data = await response.json();
    const { name, abilities, moves, sprites } = data;
    console.log(name, abilities, moves, sprites);
    //fetch the smaller png
    const frontDefaultSprite = data.sprites.front_default;
    // console.log(frontDefaultSprite);

    // fetch the abilities
    const abilityNames = [];
    for (const ability of abilities) {
      abilityNames.push(ability.ability.name);
    }
    // console.log(abilityNames);

    // fetch the moves
    const movesNames = [];
    for (const move of moves) {
      movesNames.push(move.move.name);
    }
    // console.log(movesNames);

    // fetch the png file
    const dreamWorldSprite = data.sprites.other.dream_world.front_default;

    // create a div
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("card");
    pokemonElement.innerHTML = `
    <img src="${dreamWorldSprite}">
    <p>Pokemon-${
      i + 1
    } / <span id="name-${i}"><strong>${name}</strong></span></p>
    <p class="abilities">Abilities: ${abilityNames.join(", ")}</p>
    <p class="moves">Moves: ${movesNames.join(", ")}</p>
    <img src="${frontDefaultSprite}">
    </div>`;
    pokemonContainer.appendChild(pokemonElement);
  }
};

getPokemon();
// getMtgCards();

