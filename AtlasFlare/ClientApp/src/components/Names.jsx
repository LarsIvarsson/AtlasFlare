import React, { useState, useEffect } from 'react';

const Names = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch("weatherforecast")
            .then((res) => res.json())
            .then((data) => setNames(data));
    }, []);

        return (
            <div>
                <h1>Hej</h1>
                {names.map((n) => (
                    <h2 key={n}>{n}</h2>
                ))}
            </div>
        );
    }

export default Names;