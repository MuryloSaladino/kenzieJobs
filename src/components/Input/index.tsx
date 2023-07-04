import { useState } from "react";
import { StyledInput } from "./styles";

interface IInputProps{
    placeholder: string;

}

export function Input({placeholder}:IInputProps) {

    const [value, setValue] = useState('')

    return(
        <StyledInput value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
    )
}