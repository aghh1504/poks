import React, {Component} from 'react'
import Pokemon from './Pokemon.jsx'

export default class Search extends Component{
    state = {
        name : "",
        results: []
    }
    handleNameChange = event => {
        this.setState({
            name : event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const {pokemons} = this.props
        const {name} = this.state
        // console.log("Pokemons for search: ", this.props.pokemons);

        const searchResult = pokemons.filter((pokemon) => {
        const searchFor = name.toLowerCase();
          return pokemon.name.indexOf(searchFor) !== -1;
        });

        this.setState({results: searchResult});

        console.log("searchResult: ", searchResult);
    }

    render(){
      const {results} = this.state;
      const pokemons = results || [];

        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={this.state.name}
                        placeholder="Search Pokemon by name:"
                        onChange={this.handleNameChange}/>
                    <button type='submit'>Search</button>
                </label>
            </form>
            {pokemons.length > 0 ?
              pokemons.map((pokemon)=>{
                return <Pokemon key={pokemon.name} details={pokemon} />
              })
            :<p>Not found / no results</p>}
          </div>
        )
    }
}
