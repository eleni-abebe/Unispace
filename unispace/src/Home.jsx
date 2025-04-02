import React, { useState } from 'react';
import './index.css';

function Home() {

    return(
        <div class="welcome-container">
        <header>
            <h1>Welcome to UniSpace</h1>
            <p>Your campus scheduling companion</p>
        </header>

        <div class="features">
            <div class="feature-card">
                <h3>Check Availability</h3>
                <p>See real-time room schedules</p>
                <a href="http://localhost:3000/class" class="btn">View Status</a>
            </div>
            <div class="feature-card">
                <h3>Join Queue</h3>
                <p>Reserve class spaces</p>
                <a href="#" class="btn">Get Started</a>
            </div>
        </div>
    </div>


    )
}
export default Home