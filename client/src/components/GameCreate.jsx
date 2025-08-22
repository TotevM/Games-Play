import { useNavigate } from "react-router";

export default function GameCreate() {
    const redirect = useNavigate();
    const onSubmit = (formData) => {

        fetch('http://localhost:3030/jsonstore/games', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
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

        redirect('/games');
    };
    return (
        <section id='create-page' className='auth'>
            <form id='create' action={onSubmit}>
                <div className='container'>
                    <h1>Create Game</h1>
                    <label htmlFor='leg-title'>Legendary title:</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        placeholder='Enter game title...'></input>

                    <label htmlFor='category'>Category:</label>
                    <input
                        type='text'
                        id='category'
                        name='category'
                        placeholder='Enter game category...'></input>

                    <label htmlFor='levels'>MaxLevel:</label>
                    <input
                        type='number'
                        id='maxLevel'
                        name='maxLevel'
                        min='1'
                        placeholder='1'></input>

                    <label htmlFor='game-img'>Image:</label>
                    <input
                        type='text'
                        id='imageUrl'
                        name='imageUrl'
                        placeholder='Upload a photo...'></input>

                    <label htmlFor='summary'>Summary:</label>
                    <textarea name='summary' id='summary'></textarea>
                    <input
                        className='btn submit'
                        type='submit'
                        value='Create Game'></input>
                </div>
            </form>
        </section>
    );
}
