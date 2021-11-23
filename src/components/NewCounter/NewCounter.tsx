import React from 'react';
import s from './NewCounter.module.scss'
import { CountValue } from '../CountValue';
import { Error } from '../Error';
import { StateType } from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {incCounter, resetCounter} from "../../redux/counter-reducer";
import {CounterButton} from "../CounterButton";

export const NewCounter = () => {
    const dispatch = useDispatch()
    const error = useSelector<StateType, boolean>(state => state.counter.error)
    const maxValue = useSelector<StateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<StateType, number>(state => state.counter.startValue)
    const countValue = useSelector<StateType, number>(state => state.counter.countValue)
    const disabledException = useSelector<StateType, boolean>(state => state.counter.disabledException)


    const incrementHandler = () => {
        if (countValue < maxValue) {
            dispatch(incCounter())
        }
    }
    const resetHandler = () => {
        if (countValue > 0 && countValue <= maxValue) {
            dispatch(resetCounter(startValue))
        }
    }
    return (
        <div className={s.newCounterBlock}>
            {error ? <Error/> : <CountValue/>}
            <div className={s.buttonsBlock}>
                <CounterButton disabled={countValue === maxValue || error || disabledException} callback={incrementHandler} name={'increment'}/>
                <CounterButton disabled={countValue === 0 || countValue === startValue} callback={resetHandler} name={'reset'}/>
            </div>
        </div>
    );
};
