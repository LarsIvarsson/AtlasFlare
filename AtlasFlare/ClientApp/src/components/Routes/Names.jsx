import React, { useState, useEffect } from 'react';

const Names = () => {
    const [flags, setFlags] = useState([]);
    // const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("flags/europe")
            .then((res) => res.json())
            .then((data) => setFlags(data));
    }, []);

        return (
            <div>
                <h1>FLAGS</h1>
                {flags.map((f) => (
                    <div key = {f.flagId}>
                        <h3>{f.countryName}</h3>
                        <img src={f.imageUrl} alt="flag"/>
                        <hr/>
                    </div>
                ))}
            </div>
        );
    }

export default Names;