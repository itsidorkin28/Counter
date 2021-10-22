import React, {useEffect, useState} from 'react'
import s from './App.module.scss'
import {Counter} from "./components/Counter/Counter"
import {Container, Grid, Paper, styled} from "@mui/material";
import {SetCounter} from './components/SetCounter/SetCounter';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginTop: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(startValue)

    const changeStartValue = (num: number) => {
        setStartValue(num)
    }
    const changeMaxValue = (num: number) => {
        setMaxValue(num)
    }
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

    useEffect(() => {
        let valueAsString = localStorage.getItem('startValueKey_1')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setStartValue(valueAsNumber)
        }
    }, [])
    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValueKey_1')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setMaxValue(valueAsNumber)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValueKey_1', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('maxValueKey_1', JSON.stringify(maxValue))
    }, [maxValue])







    const incCounterHandler = () => {
        if (counter < maxValue) setCounter(counter + 1)
    }

    const resetCounterHandler = () => setCounter(startValue)
    const setCounterHandler = (num: number) => setCounter(num)

    return (
        <div className={s.App}>
            <Container fixed>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            <SetCounter counter={counter}
                                        setCounter={setCounterHandler}
                                        startValue={startValue}
                                        maxValue={maxValue}
                                        setStartValue={changeStartValue}
                                        setMaxValue={changeMaxValue}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Counter counter={counter}
                                     incCounterHandler={incCounterHandler}
                                     resetCounterHandler={resetCounterHandler}
                                     startValue={startValue}
                                     maxValue={maxValue}
                            />
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default App;
