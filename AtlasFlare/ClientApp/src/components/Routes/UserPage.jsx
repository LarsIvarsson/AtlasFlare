import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
    const { name } = useParams();

    useEffect(() => {
        console.log(name);
    },[name])

    if (!name) {
        return <div>Loading...</div>
    }
    return <div>
        <h2>{ name }</h2>
    </div>
}

export default UserPage;