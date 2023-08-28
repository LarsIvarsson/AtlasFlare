import React, { useState, useEffect } from 'react';

const Names = () => {
    const [names, setNames] = useState([]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("/test")
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

        return (
            <div>
                <h1>Hej</h1>
                {todos.map((t) => (
                    <h3 key={t.id}>{t.todo}</h3>
                ))}
                {/*<h2>{todo.id}</h2>*/}
                {/*<p>{todo.todo}</p>*/}
            </div>
        );
    }

export default Names;