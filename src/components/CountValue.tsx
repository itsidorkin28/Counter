import React from 'react';
import {useSelector} from "react-redux";
import {StateType} from "../redux/store";

export const CountValue = () => {
    const countValue = useSelector<StateType, number>(state => state.counter.countValue)
    return (
        <div>
            {countValue === 0 ? 'Type settings and press Set' : countValue}
        </div>
    );
};

