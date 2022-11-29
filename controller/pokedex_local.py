import sqlite3


def get_all_pokemon_info():
    try:
        conn = sqlite3.connect('model/pokedex.db')
        cursor = conn.cursor()
        pokemon_info = []

        result = cursor.execute("SELECT * FROM PokemonData")

        for res in result:
            pokemon_info.append({
                'id': res[0],
                'name': res[1],
                'description': res[2],
                'type1': res[3],
                'type2': res[4],
                'stats': res[5],
                'height': res[6],
                'weight': res[7],
                'sprite': res[8]})

        return pokemon_info
    finally:
        conn.close()
