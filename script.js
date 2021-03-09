let pokeSprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png`
//adding this to axios.get goes wild in the console log

let url = `https://pokeapi.co/api/v2/pokemon/machop`




async function getPokemon() {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (err) {
    console.log(err.message);
  }
}
getPokemon()