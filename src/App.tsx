import React, {useEffect, useState} from 'react'
import s from './App.module.scss'
import {Counter} from "./components/Counter/Counter"

function App() {

    const startValue = 0
    const maxValue = 5

    let [counter, setCounter] = useState<number>(startValue)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterKey')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setCounter(valueAsNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterKey', JSON.stringify(counter))
    }, [counter])


    const incCounterHandler = () => {
        if (counter < maxValue) setCounter(counter + 1)
    }

    const resetCounterHandler = () => setCounter(startValue)




    return (
        <div className={s.app}>
            <Counter counter={counter}
                     incCounterHandler={incCounterHandler}
                     resetCounterHandler={resetCounterHandler}
                     startValue={startValue}
                     maxValue={maxValue}
                     />
        </div>
    )
}

export default App;
