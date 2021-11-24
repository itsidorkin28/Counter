export type CounterStateType = {
    countValue: number
    startValue: number
    maxValue: number
    error: boolean
    disabled: boolean
    disabledException: boolean
}

const initialState: CounterStateType = {
    countValue: 0,
    startValue: 0,
    maxValue: 0,
    error: false,
    disabled: false,
    disabledException: false,
}

export const counterReducer = (state = initialState, action: ActionsTypes): CounterStateType => {
    switch (action.type) {
        case "INC-COUNTER":
            return {...state, countValue: state.countValue + 1}
        case "RESET-COUNTER":
            return {...state, countValue: action.startValue}
        case "GET-START-VALUE":
            return {...state, startValue: action.startValue,}
        case "SET-START-VALUE":
            return {...state, countValue: action.startValue, disabledException: action.value}
        case "GET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET-ERROR":
            return {...state, error: action.errorValue}
        case "SET-DISABLED":
            return {...state, disabled: action.disabledValue}
        case "SET-DISABLED-EXCEPTION":
            return {...state, disabledException: action.disabledValue}
        default:
            return state
    }
}

export type ActionsTypes =
    incCounterType
    | resetCounterType
    | getStartValueType
    | setCounterValueType
    | getMaxValueType
    | setErrorType
    | setDisabledType
    | setDisabledExceptionType


export type incCounterType = ReturnType<typeof incCounter>
export const incCounter = () => {
    return {
        type: 'INC-COUNTER'
    } as const
}

export type resetCounterType = ReturnType<typeof resetCounter>
export const resetCounter = (startValue: number) => {
    return {
        type: 'RESET-COUNTER',
        startValue
    } as const
}
export type getStartValueType = ReturnType<typeof getStartValue>
export const getStartValue = (startValue: number) => {
    return {
        type: 'GET-START-VALUE',
        startValue
    } as const
}

export type setCounterValueType = ReturnType<typeof setCounterValue>
export const setCounterValue = (startValue: number, value: boolean) => {
    return {
        type: 'SET-START-VALUE',
        startValue,
        value
    } as const
}

export type getMaxValueType = ReturnType<typeof getMaxValue>
export const getMaxValue = (maxValue: number) => {
    return {
        type: 'GET-MAX-VALUE',
        maxValue
    } as const
}

export type setErrorType = ReturnType<typeof setError>
export const setError = (errorValue: boolean) => {
    return {
        type: 'SET-ERROR',
        errorValue
    } as const
}

export type setDisabledType = ReturnType<typeof setDisabled>
export const setDisabled = (disabledValue: boolean) => {
    return {
        type: 'SET-DISABLED',
        disabledValue
    } as const
}

export type setDisabledExceptionType = ReturnType<typeof setDisabledException>
export const setDisabledException = (disabledValue: boolean) => {
    return {
        type: 'SET-DISABLED-EXCEPTION',
        disabledValue
    } as const
}


