import React from 'react';


    class MorePokeInfo extends React.Component{
        state = {
            onOff : false
        }
        componentDidMount(){

        }
        handleBtnClick = () => {
            this.setState({
                onOff : !this.state.onOff
            });
        }
        renderAbilities = (abilities) => {
          return abilities.map(ability => <p key={ability.ability.name}>
          ability: {ability.ability.name}</p>)
        }

        renderTypes = (types) => {
          return types.map(pType => <p key={pType.type.name}>type: {pType.type.name}</p>)
        }

        renderDetails = (pokemonDetails) => {
          return (
            <div key={pokemonDetails.name}>
                <p key={pokemonDetails.name}>base experience: {pokemonDetails.base_experience}</p>
                {this.renderAbilities(pokemonDetails.abilities)}
                {this.renderTypes(pokemonDetails.types)}
                <img src={pokemonDetails.sprites.back_default} />
            </div>
          )
        }
        render(){
          const {sprite} = this.props;

            return(
                <div className="moreInfo">
                    <button onClick={this.handleBtnClick}>More Info!</button>
                    {this.state.onOff ? this.renderDetails(sprite) : ''}
                </div>
            )
        }
    }

export default MorePokeInfo;
