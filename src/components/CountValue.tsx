import React from 'react';
import {useSelector} from "react-redux";
import {StateType} from "../redux/store";
import s from './NewCounter/NewCounter.module.scss'

export const CountValue = () => {
    const countValue = useSelector<StateType, number>(state => state.counter.countValue)
    const maxValue = useSelector<StateType, number>(state => state.counter.maxValue)
    return (
        <div>
            {countValue === 0 ? 'Type settings and press Set'
                : <span className={countValue === maxValue ? s.redText : ''}>{countValue}</span>}
        </div>
    );
};

