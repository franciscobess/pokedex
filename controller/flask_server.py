from flask import Flask, jsonify
from pokedex_local import get_all_pokemon_info

app = Flask(__name__)

@app.route("/")
def hello_world():
    return 'The project page'

@app.route("/pokemonList/<pokemonName>")
def pokemons_list(pokemonName='bulbasaur'):
    pokemon_list = get_all_pokemon_info()

    for pokemon in pokemon_list:
        if pokemon['name'] == pokemonName:
            return pokemon
    
    return "pokemon not found"

app.run()