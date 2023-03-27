const fetch = require("node-fetch");

const getShowById = async (id) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
  );
  const data = await response.json();
  return data;
};
// export default getShowById;

getShowById(2)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

