import { combineReducers, createStore, Store } from "redux";
import {counterReducer} from "./counter-reducer";
import { loadState, saveState } from "./local-storage";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type StateType = ReturnType<typeof rootReducer>

export let store: Store<StateType> = createStore(rootReducer, loadState())

store.subscribe(()=> {
    saveState({
        counter: store.getState().counter
    })
})


//@ts-ignore
console.log(window.store = store)