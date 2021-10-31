import {counterReducer, InitialStateType} from "./counter-reducer";

test('increment', () => {
    const initialState: InitialStateType = {
        startValue: 0,
        maxValue: 0,
        countValue: 0
    }

    const endState = counterReducer(initialState, {type: 'INCREMENT', number: 1})

    expect(endState.countValue).toBe(1)

})

test('reset', () => {
    const initialState: InitialStateType = {
        startValue: 0,
        maxValue: 0,
        countValue: 5
    }

    const endState = counterReducer(initialState, {type: 'RESET', number: 0})

    expect(endState.countValue).toBe(0)

})

test('start value', () => {
    const initialState: InitialStateType = {
        startValue: 0,
        maxValue: 0,
        countValue: 0
    }

    const endState = counterReducer(initialState, {type: 'START-VALUE', number: 1})

    expect(endState.startValue).toBe(1)

})

test('max value', () => {
    const initialState: InitialStateType = {
        startValue: 0,
        maxValue: 0,
        countValue: 0
    }

    const endState = counterReducer(initialState, {type: 'MAX-VALUE', number: 1})

    expect(endState.maxValue).toBe(1)

})