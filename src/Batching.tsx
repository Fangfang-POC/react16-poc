import React, { useState, useCallback, useEffect } from 'react';

export function BatchingExample() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);
    const changeState = useCallback(() => {
        setCount(count => count + 1);
        setFlag(flag => !flag);
    }, []);

    useEffect(() => {
        setTimeout(changeState, 1000);
    }, []);
    console.log('batching');

    return (<>
        <button onClick={changeState}>onClick</button><br />
        <span>Count: {count}</span><br />
        <span>Flag: {flag.toString()}</span><br />
    </>);
}