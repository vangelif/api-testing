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
  // console.log(abilities);
  for (let i = 0; i < results.length; i++) {
    const name = results[i].name;
    console.log(results[i].url);
    const pokemonElement = document.createElement("div");
    pokemonElement.innerHTML = `<p>Pokemon-${
      i + 1
    }: <span id="name-${i}">${name}</span></p>`;
    pokemonContainer.appendChild(pokemonElement);
  }
};

getPokemon();

