import {Button} from "@mui/material"
import React from "react"
import s from './Counter.module.scss'

export function CounterError() {
    return (
        <div className={s.counter}>
            <div className={s.counterNumber}>
                <span style={{color: 'red'}}>Set the correct settings</span>
            </div>
            <div className={s.counterButtons}>
                <Button style={{margin: '3px 3px'}} variant={'contained'}
                        disabled>increment</Button>
                <Button style={{margin: '3px 3px'}} variant={'contained'}
                        disabled>reset</Button>
            </div>
        </div>
    )
}







