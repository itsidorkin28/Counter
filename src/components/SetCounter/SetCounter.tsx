import {Button, Paper, TextField} from "@mui/material"
import React, {ChangeEvent} from "react"
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
    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }
    const setStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
    }
    const setCounterHandler = () => {
        props.setCounter(props.startValue)
    }
    return (
        <div className={s.SetCounter}>
            <div className={s.counterValues}>
                <div>
                    <Paper>
                        <span>Max value:</span>
                        {props.maxValue < 0 ?
                            <TextField value={props.maxValue}
                                       onChange={setMaxValue}
                                       size={'small'}
                                       id="outlined-number"
                                       label="Number"
                                       type="number"
                                       error
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            /> : <TextField value={props.maxValue}
                                            onChange={setMaxValue}
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
                        {props.startValue < 0 ?
                            <TextField value={props.startValue}
                                       onChange={setStartValue}
                                       size={'small'}
                                       id="outlined-number"
                                       label="Number"
                                       type="number"
                                       error
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            /> : <TextField value={props.startValue}
                                            onChange={setStartValue}
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
                    props.startValue < 0 || props.maxValue <= 0 ?
                        <Button style={{margin: '3px 3px'}} variant={'contained'}
                                onClick={setCounterHandler} disabled>set</Button> :
                        <Button style={{margin: '3px 3px'}} variant={'contained'}
                                onClick={setCounterHandler}>set</Button>
                }

            </div>
        </div>
    )
}







