import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export default function Catalogue() {
    const [games, setGames] = useState([]);

        useEffect(() => {
            fetch('http://localhost:3030/jsonstore/games')
                .then((response) => response.json())
                .then((res) => setGames(Object.values(res)));
        }, []);

    return (
        <section id='catalog-page'>
            <h1>All Games</h1>
            {games.length !== 0 ? (
                games.map((game) => (
                    <div className='allGames' key={game._id}>
                        <div className='allGames-info'>
                            <img src={game ? game.imageUrl : null} alt={game.title}></img>
                            <h6>{game.category}</h6>
                            <h2>{game.title}</h2>
                            <Link to={'/games/'+game._id+'/info'} className='details-button'>
                                Details
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <h3 className='no-articles'>No games yet</h3>
            )}
        </section>
    );
}
