import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import CommentsShow from './CommentsShow.jsx';
import CommentsCreate from './CommentsCreate.jsx';

export default function GameDetails() {
    const [game, setGame] = useState(null);
    const { gameId } = useParams();
    const redirect = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games/' + gameId)
            .then((response) => response.json())
            .then((res) => setGame(res));
    }, []);

    const gameDeleteHandler = () => {
        fetch('http://localhost:3030/jsonstore/games/' + gameId, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => {
                redirect('/games');
            });
    };

    return (
        <section id='game-details'>
            <h1>Game Details</h1>
            <div className='info-section'>
                <div className='game-header'>
                    <img className='game-img' src={game?.imageUrl} />
                    <h1>{game?.title}</h1>
                    <span className='levels'>MaxLevel: {game?.maxLevel}</span>
                    <p className='type'>{game?.category}</p>
                </div>

                <p className='text'>{game?.summary}</p>

                <CommentsShow />

                <div className='buttons'>
                    <Link to={`/games/${gameId}/edit`} className='button'>
                        Edit
                    </Link>
                    <button onClick={gameDeleteHandler} className='button'>
                        Delete
                    </button>
                </div>
            </div>

            <CommentsCreate />
        </section>
    );
}
