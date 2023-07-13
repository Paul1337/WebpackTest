import React, { useState } from 'react';
// import styles from './App.module.css';

const App = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter((count) => count + 1);
    };

    return <div onClick={handleClick}>This is App component. Count = {counter}</div>;
};

export default App;
