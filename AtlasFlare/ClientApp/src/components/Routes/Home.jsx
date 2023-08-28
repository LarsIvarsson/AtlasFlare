import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application</p> 
            <Link to={"/names" }>flags</Link>
        </div>
    );
}

export default Home;