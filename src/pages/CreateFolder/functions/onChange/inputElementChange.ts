import {dispatchFunction, inputChangeEvents} from "@/interfaces/Event";


export const inputElementChange = (event: inputChangeEvents, fc: dispatchFunction<string>) => {
    return fc(event.target.value)
}