import { StyledInput } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps{
    placeholder: string;
    type?: string;
    register: UseFormRegisterReturn<string>;
}

export function Input({placeholder, type, register}:IInputProps) {
    return(
        <StyledInput type={type} placeholder={placeholder} {...register} />
    )
}