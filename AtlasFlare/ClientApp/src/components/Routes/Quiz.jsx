import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Quiz() {
    const { continent } = useParams();
    const [flags, setFlags] = useState([]);

    useEffect(() => {
        fetch(`flags/${continent}`)
            .then(res => res.json())
            .then(data => setFlags(data));
    }, [continent])

    return (
        <div>
            <div className="content">
                <div className="card">
                    <h1>Quiz template</h1>
                    {flags.map((f) => (
                        <div key={f.flagId}>
                            <img src={f.imageUrl} alt={f.countryName}/>
                            <p>{f.countryName}</p>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Quiz;