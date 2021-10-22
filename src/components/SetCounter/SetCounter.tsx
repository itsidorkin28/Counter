import {Button, Paper, TextField} from "@mui/material"
import React, {ChangeEvent, useEffect, useState} from "react"
import s from './SetCounter.module.scss'

export type CounterType = {
    counter: number
    setCounter: (num: number) => void
    setStartValue: (num: number) => void
    setMaxValue: (num: number) => void
    startValue: number
    maxValue: number

}

export function SetCounter(props: CounterType) {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    useEffect(() => {
        let valueAsString = localStorage.getItem('startValueKey_2')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setStartValue(valueAsNumber)
        }
    }, [])
    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValueKey_2')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setMaxValue(valueAsNumber)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValueKey_2', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('maxValueKey_2', JSON.stringify(maxValue))
    }, [maxValue])

    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }
    const setCounterHandler = () => {
        props.setMaxValue(maxValue)
        props.setStartValue(startValue)
        props.setCounter(startValue)
    }
    return (
        <div className={s.SetCounter}>
            <div className={s.counterValues}>
                <div>
                    <Paper>
                        <span>Max value:</span>
                        {maxValue < 0 ?
                            <TextField value={maxValue}
                                       onChange={setMaxValueHandler}
                                       size={'small'}
                                       id="outlined-number"
                                       label="Number"
                                       type="number"
                                       error
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            /> : <TextField value={maxValue}
                                            onChange={setMaxValueHandler}
                                            size={'small'}
                                            id="outlined-number"
                                            label="Number"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                            />}
                    </Paper>
                </div>
                <div>
                    <Paper>
                        <span>Start value:</span>
                        {startValue < 0 ?
                            <TextField value={startValue}
                                       onChange={setStartValueHandler}
                                       size={'small'}
                                       id="outlined-number"
                                       label="Number"
                                       type="number"
                                       error
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            /> : <TextField value={startValue}
                                            onChange={setStartValueHandler}
                                            size={'small'}
                                            id="outlined-number"
                                            label="Number"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                            />}
                    </Paper>
                </div>
            </div>
            <div className={s.setButton}>
                {
                    // eslint-disable-next-line no-mixed-operators
                    startValue === props.startValue && maxValue === props.maxValue || startValue >= maxValue || startValue < 0 || maxValue <= 0 ?
                        <Button style={{margin: '3px 3px'}} variant={'contained'}
                                onClick={setCounterHandler} disabled>set</Button> :
                        <Button style={{margin: '3px 3px'}} variant={'contained'}
                                onClick={setCounterHandler}>set</Button>
                }

            </div>
        </div>
    )
}







