import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Classes from './class.jsx';

import './index.css';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/class">Class Status</Link>
                        </li>
                        <li>
                            <Link to="/class-queue">Class Queue</Link>
                        </li>
                    </ul>
                </nav>

                {/* Define Routes for Each Page */}
                <Routes>
                     <Route path="/" element={<Home />} /> 
                    <Route path="/class" element={<Classes />} />
                    {/*<Route path="/class-queue" element={<ClassQueue />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;