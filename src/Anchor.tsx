import React, { useEffect, useCallback, useRef, useLayoutEffect } from 'react';

// Anchor can prevent default behavior of a tag.
const Anchor = () => {
    useEffect(() => {
        return () => {
            const elementA = document.querySelector('.test-anchor');
            console.log(document.querySelector('.test-anchor'));
        }
    }, []);

    return (
        <a
            className='test-anchor'
        >
            hello
        </a>
    );
};

export default Anchor;