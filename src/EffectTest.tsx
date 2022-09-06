import React, { useCallback, useEffect, useRef } from "react";

export default function EffectTest(props: {input?: string}) {
    const executedRef = useRef(false);

    useEffect(() => {
        // if (executedRef.current) {
        //     return;
        // }
        doSomething();  //Executed on mount, only once
        // requestTest();
        // executedRef.current = true;
    }, []);

    const doSomething = useCallback(() => {
        console.log('do something');
    }, []);
    return (<div>Effect Test</div>);
}


function requestTest() {
    const url = 'https://ws-edge-dev-az-eastasia-meerkat.seismic-dev.com/info/test502';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function () {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status === 200) {
                console.log('success');
            } else {
                console.log('error');
            }
        }
    }
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.send();
}