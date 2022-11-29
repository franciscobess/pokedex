import requests


class Pokedex:
    pokeapi_url = 'https://pokeapi.co/api/v2/'

    def __init__(self):
        self.data = []

    def get_pokemon_count(self):
        self.response = requests.get(f'{self.pokeapi_url}/pokemon/?limit=1')
        self.response_json = self.response.json()
        self.pokemon_count = self.response_json.get('count')

        return self.pokemon_count

    def get_pokemon_list_url(self):
        self.response = requests.get(f'{self.pokeapi_url}/pokemon/?limit={self.get_pokemon_count()}')
        self.response_json = self.response.json()
        pokemon_list = self.response_json.get('results')

        return pokemon_list

    def get_pokemon_names(self):
        pokemon_list_url = self.get_pokemon_list_url()
        pokemon_names = []

        for pokemon in pokemon_list_url:
            pokemon_names.append(pokemon.get('name'))

        return pokemon_names

    def get_pokemon_types(self, pokemon_name):
        self.response = requests.get(f'{self.pokeapi_url}/pokemon/{pokemon_name}/')
        self.response_json = self.response.json()
        pokemon_types = []

        for type in self.response_json.get('types'):
            pokemon_types.append(type.get('type').get('name'))

        return pokemon_types

    def get_pokemon_stats(self, pokemon_name):
        self.response = requests.get(f'{self.pokeapi_url}/pokemon/{pokemon_name}/')
        self.response_json = self.response.json()
        self.pokemon_stats = {}

        for stat in self.response_json.get('stats'):
            self.pokemon_stats[stat.get('stat').get('name')] = stat.get('base_stat')

        return self.pokemon_stats

    def get_pokemon_description(self, pokemon_id):
        self.response = requests.get(f'{self.pokeapi_url}/pokemon-species/{pokemon_id}', stream=True)
        self.response_json = self.response.json()
        self.descriptions = self.response_json.get('flavor_text_entries')  # return a list of descriptios grouped by language

        for desc in self.descriptions:
            if desc.get('language').get('name') == 'en':
                return str(desc.get('flavor_text').encode('utf-8')).replace('\\n', ' ')

    def get_pokemon_data(self, pokemon_name):
        self.response = requests.get(f'{self.pokeapi_url}/pokemon/{pokemon_name}/')
        self.response_json = self.response.json()
        self.pokemon_id = self.response_json.get('id')

        pokemon_info = {
            'id': self.pokemon_id,
            'name': self.response_json.get('name'),
            'description': self.get_pokemon_description(self.pokemon_id),
            'types': self.get_pokemon_types(pokemon_name),
            'stats': self.get_pokemon_stats(pokemon_name),
            'height': self.response_json.get('height'),
            'weight': self.response_json.get('weight'),
            'sprite': self.response_json.get('sprites').get('other').get('official-artwork').get('front_default'),
        }

        return pokemon_info


# pokedex = Pokedex()
# print(pokedex.get_pokemon_data('bulbasaur'))
