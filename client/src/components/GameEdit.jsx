import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

export default function GameEdit() {
    const [game, setGame] = useState(null);
    const { gameId } = useParams();
    const redirect = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games/' + gameId)
            .then((response) => response.json())
            .then((res) => setGame(res));
    }, []);

    const onSubmit = (formData) => {
        fetch('http://localhost:3030/jsonstore/games/' + gameId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                _id: gameId,
                title: formData.get('title'),
                category: formData.get('category'),
                maxLevel: formData.get('maxLevel'),
                imageUrl: formData.get('imageUrl'),
                summary: formData.get('summary'),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

        redirect('/games/' + gameId + '/info');
    };

    return (
        <section id='edit-page' className='auth'>
            <form id='edit' action={onSubmit}>
                <div className='container'>
                    <h1>Edit Game</h1>
                    <label htmlFor='leg-title'>Legendary title:</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        defaultValue={game?.title}></input>

                    <label htmlFor='category'>Category:</label>
                    <input
                        type='text'
                        id='category'
                        name='category'
                        defaultValue={game?.category}></input>

                    <label htmlFor='levels'>MaxLevel:</label>
                    <input
                        type='number'
                        id='maxLevel'
                        name='maxLevel'
                        min='1'
                        defaultValue={game?.maxLevel}></input>

                    <label htmlFor='game-img'>Image:</label>
                    <input
                        type='text'
                        id='imageUrl'
                        name='imageUrl'
                        defaultValue={game?.imageUrl}></input>

                    <label htmlFor='summary'>Summary:</label>
                    <textarea
                        name='summary'
                        id='summary'
                        defaultValue={game?.summary}></textarea>
                    <input
                        className='btn submit'
                        type='submit'
                        value='Edit Game'></input>
                </div>
            </form>
        </section>
    );
}
