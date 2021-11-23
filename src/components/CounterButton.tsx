import React from 'react';

type CounterButtonType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const CounterButton = (props: CounterButtonType) => {
    const {name, callback, disabled} = props
    const onClickHandler = () => {
        callback()
    }
    return (
        <div>
            <button disabled={disabled} onClick={onClickHandler}>{name}</button>
        </div>
    );
};

