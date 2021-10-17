import React from "react"
import {Button} from "../Button/Button"
import s from './Counter.module.scss'

export type CounterType = {
    counter: number
    incCounterHandler: () => void
    resetCounterHandler: () => void
    startValue: number
    maxValue: number
}

export function Counter(props: CounterType) {

    const incClass = props.counter < props.maxValue ? s.counterButtonsInc : s.counterButtonsIncBlue
    const resClass = props.counter === props.maxValue ? s.counterButtonsRes : s.counterButtonsResBlue
    const redTextClass = props.counter === props.maxValue ? s.counterNumberRed : ''
    const incCounterHandler = () => props.incCounterHandler()
    const resetCounterHandler = () => props.resetCounterHandler()

    return (
        <div className={s.counter}>
            <div className={s.counterNumber}>
                <span className={redTextClass}>{props.counter}</span>
            </div>
            <div className={s.counterButtons}>
                <div>
                    <Button name={'inc'} onClick={incCounterHandler} disabled={props.maxValue} className={incClass}
                            counter={props.counter}/>
                </div>
                <div>
                    <Button name={'reset'} onClick={resetCounterHandler} disabled={props.startValue} className={resClass}
                            counter={props.counter}/>
                </div>
            </div>
        </div>
    )
}







