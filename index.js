// const fetch = require("node-fetch");
const api_url = `https://pokeapi.co/api/v2/pokemon`;
// const api_ais_url = `https://data.aishub.net/ws.php?username=A&format=B&output=C&compress=D&latmin=E&latmax=F&lonmin=G&lonmax=H&mmsi=I&imo=J&interval=K`;
// getShowById();
// const navitia_api = `https://api.navitia.io/v1/coverage/{regions.id}/stop_areas/{stop_areas.id}/arrivals`;
const pokemonContainer = document.getElementById("pokemon-box");
// const pokemonItem = document.getElementById("item");
const getPokemon = async () => {
  const response = await fetch(api_url);
  const data = await response.json();
  const { results } = data;
  console.log(results);
  console.log(results[3].name);
  for (let i = 0; i < results.length; i++) {
    // const name = results[i].name;
    console.log(results[i].url);
    const url = results[i].url;
    const pokemonResponse = await fetch(url);
    const pokemonData = await pokemonResponse.json();
    const name = pokemonData.name;
    const frontDefaultSprite = pokemonData.sprites.front_default;
    const abilities = pokemonData.abilities;
    console.log(abilities);
    const moves = pokemonData.moves;
    console.log(moves);
    // fetch the png file
    const dreamWorldSprite =
      pokemonData.sprites.other.dream_world.front_default;
    // fetch the abilities
    const abilityNames = [];
    for (const ability of abilities) {
      abilityNames.push(ability.ability.name);
    }
    console.log(abilityNames);
    // fetch the moves
    const movesNames = [];
    for (const move of moves) {
      movesNames.push(move.move.name);
    }
    console.log(movesNames);
    // create a div
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokeCard");
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

