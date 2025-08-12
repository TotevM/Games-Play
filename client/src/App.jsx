import './App.css';
import {Routes, Route } from 'react-router';
import Header from './components/Header';

function App() {
    return (
        <body>
            <div id='box'>
                <Header />

                <main id='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </main>
            </div>
        </body>
    );
}

export default App;
