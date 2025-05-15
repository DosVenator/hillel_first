export default function PlayerCard({ player, setVote }) {
    return (
        <div className="Player-card">
            <p>{player.name}</p>
            <p>&#128071;</p>
            <p>{player.vote}</p>
            {setVote && <button onClick={() => setVote(player.id)}>Сhoose</button>}
        </div>
    )
}