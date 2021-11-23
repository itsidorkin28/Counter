import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setCounterValue } from '../../redux/counter-reducer';
import { StateType } from '../../redux/store';
import { CounterButton } from '../CounterButton';
import s from './CounterSetter.module.scss'
import { CounterValuesSetter } from './CounterValuesSetters';

export const CounterSetter = () => {
    let startValue = useSelector<StateType, number>(state => state.counter.startValue)
    let disabled = useSelector<StateType, boolean>(state => state.counter.disabled)

    let dispatch = useDispatch()

    return (
        <div className={s.counterSetterBlock}>
            <CounterValuesSetter />
            <CounterButton disabled={disabled} name={'Set'} callback={()=>{dispatch(setCounterValue(startValue, false))}}/>
        </div>
    );
};
