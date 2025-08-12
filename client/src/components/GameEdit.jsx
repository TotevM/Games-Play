export default function GameEdit() {
    return (
        <section id='edit-page' className='auth'>
            <form id='edit'>
                <div className='container'>
                    <h1>Edit Game</h1>
                    <label htmlFor='leg-title'>Legendary title:</label>
                    <input type='text' id='title' name='title' value=''></input>

                    <label htmlFor='category'>Category:</label>
                    <input
                        type='text'
                        id='category'
                        name='category'
                        value=''></input>

                    <label htmlFor='levels'>MaxLevel:</label>
                    <input
                        type='number'
                        id='maxLevel'
                        name='maxLevel'
                        min='1'
                        value=''></input>

                    <label htmlFor='game-img'>Image:</label>
                    <input
                        type='text'
                        id='imageUrl'
                        name='imageUrl'
                        value=''></input>

                    <label htmlFor='summary'>Summary:</label>
                    <textarea name='summary' id='summary'></textarea>
                    <input
                        className='btn submit'
                        type='submit'
                        value='Edit Game'></input>
                </div>
            </form>
        </section>
    );
}
