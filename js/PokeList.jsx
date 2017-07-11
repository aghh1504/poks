import React from 'react';
import MorePokeInfo from './MorePokeInfo.jsx';
import Pokemon from './Pokemon.jsx';
import Search from './Search.jsx';

// import pokeball from '../pokeball.gif';

    class PokeList extends React.Component{
        state = {
            name : '',
            pokemons: []
        };
        componentDidMount() {
            fetch('https://pokeapi.co/api/v2/pokemon/')
                .then( response => response.json() )
                .then( data => {
                    if(!data.results || data.results.length < 1){
                        this.setState({
                            name : "Nie odnaleziono pokemonów",
                        });
                    } else {
                      this.setState({
                        pokemons: data.results
                      });
                    }
                });
        }
        render(){
            const {pokemons} = this.state;

            return (
                <div>
                    <Search pokemons={pokemons}/>

                    <ul>
                    {pokemons.length > 0 &&
                      pokemons.map((pokemon)=>{
                        return <Pokemon key={pokemon.name} details={pokemon} />
                      })
                    }
                    </ul>
                </div>
            )
        }
    }

export default PokeList;
