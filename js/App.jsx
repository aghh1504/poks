import React, {Component} from 'react';
 require('../scss/main.scss');
 import Header from './Header.jsx';
 import PokeList from './PokeList.jsx';

export default class App extends Component {
      render() {
        return (
          <div className="wraper">
          <Header welcomeText={"Welcome to the Pokedex!"}/>
           <PokeList />
        </div>
      )
    }
}

// <Header welcomeText={"Welcome to the Pokedex!"}/>
// <PokeList />
