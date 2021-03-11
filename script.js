let pokeSprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/1.png`
//adding this to axios.get goes wild in the console log

let url = `https://pokeapi.co/api/v2/pokemon/ivysaur`
let pkmnLeft = document.querySelector('#pokesideleft')
let pkmnRight = document.querySelector('#pokesideright')
let pkmnBody = document.querySelector('#pkmnbody')
let numCaught = document.querySelector('#numcaught')
let congrats = document.querySelector('#congrats')

// document.addEventListener('DOMContentLoaded', () => {

  const wildPkmn = [
    { name: 'Ditto', img: 'pokemon-pics/ditto.png' }, { name: 'Ditto', img: 'pokemon-pics/ditto.png' },
    { name: 'Charmander', img: 'pokemon-pics/charmander.png' }, { name: 'Charmander', img: 'pokemon-pics/charmander.png' },
    { name: 'Haunter', img: 'pokemon-pics/haunter.png' }, { name: 'Haunter', img: 'pokemon-pics/haunter.png' },
    { name: 'Machop', img: 'pokemon-pics/machop.png' }, { name: 'Machop', img: 'pokemon-pics/machop.png' },
    { name: 'Eevee', img: 'pokemon-pics/eevee.png' }, { name: 'Eevee', img: 'pokemon-pics/eevee.png' },
    { name: 'Blastoise', img: 'pokemon-pics/blastoise.png' }, { name: 'Blastoise', img: 'pokemon-pics/blastoise.png' }]

  
  


  
  wildPkmn.sort(() => 0.5 - Math.random())
  const cardGrid = document.querySelector('.cardgrid')

  
  
  
  function tallGrass() {
    for (let i = 0; i < wildPkmn.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'pokemon-pics/grasstiletwo.png') 
      card.setAttribute('data-id', i)
      card.addEventListener('click', encounter)
      cardGrid.appendChild(card)

    }
  }
  
  tallGrass()


  const pokemonCaught = []
  let pokemonFound = []
  let pokemonFoundData = []

  function checkCaughtPkmn() {
    const caughtPkmn = document.querySelectorAll('img')
    const pkmnOneData = pokemonFoundData[0]
    const pkmnTwoData = pokemonFoundData[1]

    if (pokemonFound[0] === pokemonFound[1]) {
      alert(`All right!! You caught ${pokemonFound[0]}!`)
      caughtPkmn[pkmnOneData].setAttribute('src', 'pokemon-pics/pokeball.png')
      caughtPkmn[pkmnTwoData].setAttribute('src', 'pokemon-pics/pokeball.png')
      pokemonCaught.push(pokemonFound)
    } else {
      caughtPkmn[pkmnOneData].setAttribute('src', 'pokemon-pics/grasstile.png')
      caughtPkmn[pkmnTwoData].setAttribute('src', 'pokemon-pics/grasstile.png')
      alert(`Awww, ${pokemonFound[0]} and ${pokemonFound[1]} got away!!`)
    }
    pokemonFound = []
    pokemonFoundData = []
    numCaught.textContent = `You've caught ${pokemonCaught.length} Pokemon!` 
    if (pokemonCaught.length === wildPkmn.length / 2)
      congrats.textContent = "Uh oh! All out of Pokéball's! Go Get some more!"
    removeEventListener ("click", encounter)
  }
    
    
    
  
  function encounter(){
    const pokemonType = this.getAttribute('data-id')
    pokemonFound.push(wildPkmn[pokemonType].name)
    pokemonFoundData.push(pokemonType)
    this.setAttribute('src', wildPkmn[pokemonType].img)
    if (pokemonFound.length === 2) {
      setTimeout(checkCaughtPkmn, 500)
    }
  }
  
  




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
}
createPokeImage(151)