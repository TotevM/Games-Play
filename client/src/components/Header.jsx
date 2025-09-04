import useAuth from '../hooks/useAuth.js';
import { Link } from 'react-router';

export default function Header() {
    const { isAuthenticated } = useAuth();

    return (
        <header>
            <h1>
                <Link className='home' to='/'>
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to='/games'>All games</Link>
                {isAuthenticated ? 
                (
                    <div id='user'>
                        <Link to='gameCreate'>Create Game</Link>
                        <Link to='/logout'>Logout</Link>
                    </div>
                ) : 
                (
                    <div id='guest'>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
