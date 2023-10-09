import {inputChangeEvents} from "../interfaces/Event";

export const inputElementChange = (event: inputChangeEvents, fc: any) => {
    return fc(event.target.value)
}