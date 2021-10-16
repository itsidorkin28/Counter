import React from "react"

export type ButtonType = {
    name: string
    onClick: () => void
    className: string
    disabled: number
    counter: number
}

export function Button(props: ButtonType) {
    return (
        <div>
            <button className={props.className}
                    disabled={props.counter === props.disabled}
                    onClick={() => props.onClick()}>
                {props.name}
            </button>
        </div>
    )
}