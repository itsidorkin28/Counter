export type InitialStateType = {
    startValue: number,
    maxValue: number,
    countValue: number
}

const initialState = {
    startValue: 0,
    maxValue: 0,
    countValue: 0
};

type ActionsTypes = IncrementACType | ResetACType | StartValueACType | MaxValueACType

export const counterReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, countValue: state.countValue + action.number}
        case "RESET":
            return {...state, countValue: action.number}
        case "START-VALUE":
            return {...state, startValue: action.number}
        case "MAX-VALUE":
            return {...state, maxValue: action.number}
        default:
            return state
    }
}

type IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = (number: number) => {
    return {
        type: 'INCREMENT',
        number
    } as const
}

type ResetACType = ReturnType<typeof resetAC>
export const resetAC = (number: number) => {
    return {
        type: 'RESET',
        number
    } as const
}

type StartValueACType = ReturnType<typeof startValueAC>
export const startValueAC = (number: number) => {
    return {
        type: 'START-VALUE',
        number
    } as const
}

type MaxValueACType = ReturnType<typeof maxValueAC>
export const maxValueAC = (number: number) => {
    return {
        type: 'MAX-VALUE',
        number
    } as const
}


