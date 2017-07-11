import React from 'react';
import MorePokeInfo from './MorePokeInfo.jsx';

export default class Pokemon extends React.Component {
    state = {
        pokemonSprite: {}
    };
    componentDidMount() {
        fetch(this.props.details.url)
          .then(response => response.json())
            .then(data => {
              this.setState({pokemonSprite: data});
          });
    }
    renderSprite = (pokemonSprite) => {
      return (
          <div>
              <img src={pokemonSprite.sprites.front_default}/>
               <h4>{pokemonSprite.name}</h4>
          </div>
      )
    }
    render() {
      const {pokemonSprite} = this.state;
        return (
          <div>
          {pokemonSprite.name ?
            <div>
              {this.renderSprite(pokemonSprite)}
              <MorePokeInfo sprite={pokemonSprite}/>
            </div>
            :
            <div>Loading...</div>
          }
          </div>
      )
    }
}
