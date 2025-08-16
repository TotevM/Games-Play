import { useEffect, useState } from 'react';
import heroImg from '../images/four_slider_img01.png';

export default function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games')
            .then((response) => response.json())
            .then((res) => setGames(Object.values(res)));
    }, []);

    return (
        <section id='welcome-world'>
            <div className='welcome-message'>
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src={heroImg} alt='hero'></img>

            <div id='home-page'>
                {games.length !== 0 ? (
                    games.slice(0,3).map((game) => (
                        <div className='game' key={game._id}>
                            <div className='image-wrap'>
                                <img src={game.imageUrl}></img>
                            </div>
                            <h3>{game.title}</h3>
                            <div className='rating'>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                                <span>☆</span>
                            </div>
                            <div className='data-buttons'>
                                <a href='#' className='btn details-btn'>
                                    Details
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='no-articles'>No games yet</p>
                )}
                {/* <h1>Latest Games</h1>
                {games.map((game) => (
                    <div className='game' key={game._id}>
                        <div className='image-wrap'>
                            <img src={game.imageUrl}></img>
                        </div>
                        <h3>{game.title}</h3>
                        <div className='rating'>
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                            <span>☆</span>
                        </div>
                        <div className='data-buttons'>
                            <a href='#' className='btn details-btn'>
                                Details
                            </a>
                        </div>
                    </div>
                ))}

                <p className='no-articles'>No games yet</p> */}
            </div>
        </section>
    );
}
