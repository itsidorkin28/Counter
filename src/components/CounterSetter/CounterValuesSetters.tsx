import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../redux/store';
import { ValueInput } from './ValueInput';
import {getMaxValue, getStartValue, setDisabled, setError} from "../../redux/counter-reducer";

export const CounterValuesSetter = () => {
    let startValue = useSelector<StateType, number>(state => state.counter.startValue)
    let maxValue = useSelector<StateType, number>(state => state.counter.maxValue)
    const dispatch = useDispatch()

    const getStartInputValue = (value : number) => {
        dispatch(getStartValue(value))
        startValue = value
        if (startValue < 0 || startValue === maxValue || startValue > maxValue){
            dispatch(setError(true))
            dispatch(setDisabled(true))
        } else{
            dispatch(setError(false))
            dispatch(setDisabled(false))
        }

    }
    const getMaxInputValue = (value: number) =>{
        dispatch(getMaxValue(value))
        maxValue = value
        if (maxValue < 0 || startValue > maxValue || startValue < 0 || startValue === maxValue) {
            dispatch(setError(true))
            dispatch(setDisabled(true))
        } else {
            dispatch(setError(false))
            dispatch(setDisabled(false))
        }
    }


    return(
        <div>
            <ValueInput name={'max value'} getInputValue={getMaxInputValue} value={maxValue}/>
            <ValueInput name={'start value'} getInputValue={getStartInputValue} value={startValue}/>
        </div>
    )
}


