# Gotta-Match-Em-All!

![alt text](https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336)


- This application will test and train your short-term memory using **Pokémon**, celebrating the 25th anniversary of the franchise! In it, you'll need to flip a card in a grid of cards, then another. If those are the same, you keep the set, if not, they flip back over, and you try another two, * hopefully! * remembering where the last two were. You'll win once you've matched all pairs!

- I will be using [the PokéAPI](https://pokeapi.co) for this project. I'll pull the image url of Pokémon by using those contained in their Pokédex entries.

```json
        {
            "flavor_text": "A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.",
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "version": {
                "name": "red",
                "url": "https://pokeapi.co/api/v2/version/1/"
            }
        },
```
![alt text](https://i.imgur.com/ZPt671q.png)

**MVP**: Have it show the image from the API, have it recognize matches of 2, and log the scores, or "caught pokemon".

**Post-MVP**: Animated card flips, having the matches not just be of the same Pokemon, but rather the "evolutionary" match i.e. Pikachu matching with Raichu, Charmander matching with Charizard, ect. Having it pull random Pokemon matches from the API.

:**Goals**:

**Mon**: Creating and linking all files; JS, HTML, CSS. Create HTML/CSS rough template. Making an Axios call to the Pokemon API for images. Start to understand the skeleton of the JS memory game.

**Tues**: Continue learning JS mechanics behind game. Begin writing game, populating page with 8 images that are connected to eventlisteners. Hopefully get some visual representation of score on screen.

**Wed**: Deep into code-writing. 

**Thur**: High-anxiety(!) last minute coding, CSS styling (dessert).

**Fri**: Presentation.


|   |Studying New Concepts|General(Axios Calls, ect.)|Writing Code|Styling|Total Hours Day| Total Hours Days|
|---|---|---|---|---|---|---|
|Mon|4 hours   |1 hour   |3 hours   |1 hour(initial)|9|9|
|Tues|4 hours   |1 hour   |7 hours   |0 hours   |12|21|
|Wed|2 hours(review)   |1 hour   |8 hours   |1 hour|12|33|
|Thur|1 hour(review)   |1 hour   |4 hours   |5 hours|11|44|
|Fri|PRESENTATION DAY|PRES DAY|PRES DAY|PRES DAY |PRES DAY|PRES DAY|

