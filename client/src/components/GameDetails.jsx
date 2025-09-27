import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import CommentsShow from './CommentsShow.jsx';
import CommentsCreate from './CommentsCreate.jsx';
import { useGame } from '../api/gameApi.js';
import useAuth from '../hooks/useAuth.js';

export default function GameDetails() {
    const { userId, accessToken } = useAuth();
    const { gameId } = useParams();
    const { game } = useGame(gameId);
    const redirect = useNavigate();
    const isOwner = userId === game._ownerId;

    const gameDeleteHandler = () => {
        fetch('http://localhost:3030/data/games/' + gameId, {
            method: 'DELETE',
            headers: { 'X-Authorization': accessToken },
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

                {isOwner && (
                    <div className='buttons'>
                        <Link to={`/games/${gameId}/edit`} className='button'>
                            Edit
                        </Link>
                        <button
                            onClick={gameDeleteHandler}
                            className='button'>
                            Delete
                        </button>
                    </div>
                )}
            </div>

            <CommentsCreate />
        </section>
    );
}
