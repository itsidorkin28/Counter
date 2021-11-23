import React from 'react'
import {NewCounter} from "./components/NewCounter/NewCounter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";


function App() {
    return (
        <div className={'app'}>
            <NewCounter/>
            <CounterSetter/>
        </div>
    )
}

export default App;
