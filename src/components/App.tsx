import React, { useState } from 'react';

const App = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter((count) => count + 1);
    };

    return <div onClick={handleClick}>Test app component. Count = {counter}</div>;
};

export default App;
