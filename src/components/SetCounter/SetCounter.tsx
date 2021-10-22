import {Button, Paper, TextField} from "@mui/material"
import React, {ChangeEvent, useState} from "react"
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
    const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }
    const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }
    const setCounterHandler = () => {
        props.setMaxValue(maxValue)
        props.setStartValue(startValue)
        props.setCounter(props.startValue)
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
                    startValue >= maxValue || startValue < 0 || maxValue <= 0 ?
                        <Button style={{margin: '3px 3px'}} variant={'contained'}
                                onClick={setCounterHandler} disabled>set</Button> :
                        <Button style={{margin: '3px 3px'}} variant={'contained'}
                                onClick={setCounterHandler}>set</Button>
                }

            </div>
        </div>
    )
}







