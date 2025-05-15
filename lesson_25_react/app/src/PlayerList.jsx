import PlayerCard from "./PlayerCard";

export default function List({ players, setVote }) {
    return (
        <div>
            <h3>Choose the best city</h3>
            <div className="Player-list">
                {players.map(player => <PlayerCard key={player.id} player={player} setVote={setVote}/>)}
            </div>
        </div>
    )
}