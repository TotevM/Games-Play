import './styles/style.css';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import Login from './components/Login';
import Register from './components/Register';
import GameCreate from './components/GameCreate';
import GameDetails from './components/GameDetails';
import GameEdit from './components/GameEdit';
import UserProvider from './providers/UserProvider'

function App() {

    //TODO add AuthGuard
    return (
        <UserProvider>
            <div id='box'>
                <Header />
                <main id='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/gameCreate' element={<GameCreate />} />
                        <Route path='/games' element={<Catalogue />} />
                        <Route
                            path='/games/:gameId/info'
                            element={<GameDetails />}
                        />
                        <Route
                            path='/games/:gameId/edit'
                            element={<GameEdit />}
                        />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </main>
            </div>
        </UserProvider>
    );
}

export default App;
