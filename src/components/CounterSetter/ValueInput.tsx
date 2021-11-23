import {useDispatch, useSelector } from "react-redux"
import { setDisabledException } from "../../redux/counter-reducer"
import { StateType } from "../../redux/store"

type ValueInputType = {
    name: string
    getInputValue: (value: number) => void
    value: number
}


export const ValueInput = ({name, getInputValue, value}: ValueInputType) => {
    const error = useSelector<StateType, boolean>(state => state.counter.error)
    const dispatch = useDispatch()
    const onChangeHandler = (e: any) => {
        const inputValue = +e.currentTarget.value
        getInputValue(inputValue)
        dispatch(setDisabledException(true))
    }

    return (
        <div>
            <p>{name}</p>
            <input value={value} type="number" onChange={onChangeHandler} className={error ? 'errorInput' : ''}/>
        </div>
    )
}
