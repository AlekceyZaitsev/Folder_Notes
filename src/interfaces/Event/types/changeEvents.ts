import React, {Dispatch, SetStateAction} from "react";

export type ChangeEvents = React.ChangeEvent<HTMLInputElement>
export type dispatchFunction<T> = Dispatch<SetStateAction<T>>;