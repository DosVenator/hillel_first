import { Component } from 'react';
import './App.css';
import List from './PlayerList';
import PlayerCard from './PlayerCard';

class App extends Component {
  constructor(props) {
    super(props);
    const saved = localStorage.getItem('players');

    this.state = {
      winner: null,
      players: saved ? JSON.parse(saved) : [
        { id: 1, name: "Kyiv", vote: 0 },
        { id: 2, name: "Kharkiv", vote: 0 },
        { id: 3, name: "Lviv", vote: 0 },
        { id: 4, name: "Odessa", vote: 0 },
      ]
    };
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.players !== this.state.players) {
      localStorage.setItem('players', JSON.stringify(this.state.players));
    }
  }

 setVote = (id) => {
  const players = this.state.players;
  const player = players.find(p => p.id === id);
  player.vote++;
  this.setState({ players: [...players] });
};

HandClean = () => {
  const players = this.state.players;
  for (let i = 0; i < players.length; i++) {
    players[i].vote = 0;
  }
  this.setState({ players: [...players], winner: null });
};

  HandWinner = () => {
    const { players } = this.state;
    let winner = 0;
    for (let i = 1; i < players.length; i++) {
      if (players[i].vote > players[winner].vote) {
        winner = i;
      }
    }
    this.setState({ winner: players[winner] });
  };

  render() {
    const { players, winner } = this.state;

    return (
      <>
        <List players={players} setVote={!winner ? this.setVote : null} />
        {!winner && <button className='btn' onClick={this.HandWinner}>Winner</button>}
        {winner && <PlayerCard player={winner}/>}
        {winner && <button className='btn' onClick={this.HandClean}>Clean result</button>}
      </>
    );
  }
}

export default App;