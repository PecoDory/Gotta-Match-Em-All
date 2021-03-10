let pokeSprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png`
//adding this to axios.get goes wild in the console log

let url = `https://pokeapi.co/api/v2/pokemon/machop`
let pkmnLeft = document.querySelector('#pokesideleft')
let pkmnRight = document.querySelector('#pokesideright')
let pkmnBody = document.querySelector('#pkmnbody')
let numCaught = document.querySelector('#numcaught')

document.addEventListener('DOMContentLoaded', () => {

  let wildPkmn = [
    {
      name: 'Ditto',
      img: 'pokemon-pics/ditto.png'
  },
    {
      name: 'Ditto',
      img: 'pokemon-pics/ditto.png'
  },
    {
      name: 'Charmander',
      img: 'pokemon-pics/charmander.png'
  },
    {
      name: 'Charmander',
      img: 'pokemon-pics/charmander.png'
  },
    {
      name: 'Haunter',
      img: 'pokemon-pics/haunter.png'
  },
    {
      name: 'Haunter',
      img: 'pokemon-pics/haunter.png'
  },
    {
      name: 'Machop',
      img: 'pokemon-pics/machop.png'
  },
    {
      name: 'Machop',
      img: 'pokemon-pics/machop.png'
  },
    {
      name: 'Eevee',
      img: 'pokemon-pics/eevee.png'
  },
    {
      name: 'Eevee',
      img: 'pokemon-pics/eevee.png'
  },
    {
      name: 'Blastoise',
      img: 'pokemon-pics/blastoise.png'
  },
    {
      name: 'Blastoise',
      img: 'pokemon-pics/blastoise.png'
  }
]

  const cardGrid = document.querySelector('.cardgrid')
  

  const pkmnFound = []

  function tallGrass() {
  for (let i = 0; i < wildPkmn.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'pokemon-pics/grasstiletwo.png')
    card.setAttribute('data-id', i)
    // card.addEventListener('click', flipcard)
  cardGrid.appendChild(card)
    }    
  }
  
  function encounter() {
    const thatPokemon = this.getAttribute('data-id')
    
}






  tallGrass();




})




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
createPokeImage(151)