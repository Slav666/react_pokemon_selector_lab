import React from "react";
import PokemonSelector from "../components/PokemonSelector";

class PokemonContainer extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          pokemons: [],
          currentPokemon: null
      };
      this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({pokemons: data.results}))
}

handlePokemonSelected(index){
    const selectedPokemon = this.state.pokemons[index];
    this.setState({currentPokemon: selectedPokemon})
}

    render(){
        return (
          <div>
            <h2>Pokemon Container</h2>
            <PokemonSelector pokemons={this.state.pokemons}/>
            {/* <PokemonDetail/> */}
          </div>
        )
    }
}

export default PokemonContainer;