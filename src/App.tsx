import React, {useEffect, useReducer} from 'react'
import s from './App.module.scss'
import {Container, Paper} from "@mui/material";
import {SetCounter} from './components/SetCounter/SetCounter';
import {counterReducer, incrementAC, maxValueAC, resetAC, startValueAC} from "./state/counter-reducer";

function App() {
    const [count, dispatch] = useReducer(counterReducer, {
        startValue: 0,
        maxValue: 0,
        countValue: 0
    })

    const changeStartValue = (num: number) => {
        dispatch(startValueAC(num))
    }
    const changeMaxValue = (num: number) => {
        dispatch(maxValueAC(num))
    }
    useEffect(() => {
        let valueAsString = localStorage.getItem('counterKey')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            dispatch(resetAC(valueAsNumber))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterKey', JSON.stringify(count.countValue))
    }, [count.countValue])

    useEffect(() => {
        let valueAsString = localStorage.getItem('startValueKey_1')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            dispatch(startValueAC(valueAsNumber))
        }
    }, [])
    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValueKey_1')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            dispatch(maxValueAC(valueAsNumber))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValueKey_1', JSON.stringify(count.startValue))
    }, [count.startValue])
    useEffect(() => {
        localStorage.setItem('maxValueKey_1', JSON.stringify(count.maxValue))
    }, [count.maxValue])

    const incCounterHandler = () => {
        if (count.countValue < count.maxValue) dispatch(incrementAC(1))
    }

    const resetCounterHandler = () => dispatch(resetAC(count.startValue))
    const setCounterHandler = (num: number) => dispatch(resetAC(num))

    return (
        <div className={s.App}>
            <Container fixed maxWidth={'sm'}>
                        <Paper>
                            <SetCounter counter={count.countValue}
                                        setCounter={setCounterHandler}
                                        startValue={count.startValue}
                                        maxValue={count.maxValue}
                                        setStartValue={changeStartValue}
                                        setMaxValue={changeMaxValue}
                                        incCounterHandler={incCounterHandler}
                                        resetCounterHandler={resetCounterHandler}/>
                        </Paper>

            </Container>
        </div>
    )
}

export default App;
