import React from 'react'
import {NewCounter} from "./components/NewCounter/NewCounter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";
import s from './App.module.scss'


function App() {
    return (
        <div className={s.app}>
            <CounterSetter/>
            <NewCounter/>
        </div>
    )
}

export default App;
