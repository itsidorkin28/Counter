import {Button} from "@mui/material"
import React from "react"
import s from './Counter.module.scss'

export type CounterType = {
    counter: number
    incCounterHandler: () => void
    resetCounterHandler: () => void
    startValue: number
    maxValue: number
}

export function Counter(props: CounterType) {

    const counterNumberMaxClass = props.counter === props.maxValue ? s.counterNumberMax : ''
    const incCounterHandler = () => props.incCounterHandler()
    const resetCounterHandler = () => props.resetCounterHandler()

    return (
        <div className={s.counter}>
            <div className={s.counterNumber}>
                <span className={counterNumberMaxClass}>{props.counter}</span>
            </div>
            <div className={s.counterButtons}>

                    {
                        props.maxValue === props.counter
                            ? <Button style={{margin: '3px 3px'}} variant={'contained'} onClick={incCounterHandler} disabled>inc</Button>
                            : <Button style={{margin: '3px 3px'}} variant={'contained'} onClick={incCounterHandler}>inc</Button>
                    }


                    {
                        // eslint-disable-next-line no-mixed-operators
                        props.maxValue !== 0 && props.counter === props.maxValue || props.counter > props.startValue
                            ? <Button style={{margin: '3px 3px'}} variant={'contained'} onClick={resetCounterHandler}>res</Button>
                            : <Button style={{margin: '3px 3px'}} variant={'contained'} onClick={resetCounterHandler} disabled>res</Button>
                    }

            </div>
        </div>
    )
}







