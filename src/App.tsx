import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Anchor from './Anchor';
import EffectTest from './EffectTest';
import { BatchingExample } from './Batching';

function Tabs() {
    const [tab, setTab] = React.useState(0);
    return (
        <div>
            <button onClick={() => setTab(tab === 0 ? 1 : 0)}>Switch Tab</button>
            {tab === 0 && <div><Anchor /></div>}
            {tab === 1 && <EffectTest />}
        </div>
    );
}

// ReactDOM.render(<StrictMode>
//     <BatchingExample />
// </StrictMode>, document.getElementById('root'));
ReactDOM.render(<BatchingExample />, document.getElementById('root'));

export { };