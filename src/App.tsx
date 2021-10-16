import React, {useState} from 'react'
import s from './App.module.scss'
import {Counter} from "./components/Counter/Counter"

function App() {

    const startValue = 0
    const maxValue = 5

    let [counter, setCounter] = useState<number>(startValue)

    const incCounter = () => {
        if (counter < maxValue) setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(startValue)
    }

    return (
        <div className={s.app}>
            <Counter counter={counter}
                     incCounter={incCounter}
                     resetCounter={resetCounter}
                     startValue={startValue}
                     maxValue={maxValue}/>
        </div>
    )
}

export default App;
