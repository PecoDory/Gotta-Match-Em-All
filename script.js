let pokeSprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png`
//adding this to axios.get goes wild in the console log

let url = `https://pokeapi.co/api/v2/pokemon/machop`
let pkmnLeft = document.querySelector('#pokesideleft')
let pkmnRight = document.querySelector('#pokesideright')
let pkmnBody = document.querySelector('#pkmnbody')



async function getPokemon() {
  try {
    const response = await axios.get(url);
    console.log(response.data);



  } catch (err) {
    console.log(err.message);
  }
}
getPokemon()

function createPokeImage(pokeID){
  let pokeImage = document.createElement('img')
  pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

  pkmnRight.append(pokeImage);
  pkmnRight.append(pokeImage);
}
createPokeImage()