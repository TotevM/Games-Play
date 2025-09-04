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
import UserProvider from './providers/UserProvider';
import AuthGuard from './guards/AuthGuard';
import GuestGuard from './guards/GuestGuard';

import Logout from './components/Logout';

function App() {
    return (
        <UserProvider>
            <div id='box'>
                <Header />
                <main id='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/games' element={<Catalogue />} />
                        <Route
                            path='/games/:gameId/info'
                            element={<GameDetails />}
                        />

                        <Route element={<AuthGuard />}>
                            <Route path='/logout' element={<Logout />} />
                            <Route
                                path='/gameCreate'
                                element={<GameCreate />}
                            />
                            <Route
                                path='/games/:gameId/edit'
                                element={<GameEdit />}
                            />
                        </Route>

                        <Route element={<GuestGuard />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </UserProvider>
    );
}

export default App;
