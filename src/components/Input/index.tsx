import { StyledInput } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

import { forwardRef, ForwardedRef } from "react";

// interface IInputProps{
//     placeholder: string;
//     type?: string;
//     register: UseFormRegisterReturn<string>;
// }

// export function Input({placeholder, type, register}:IInputProps) {
//     return(
//         <StyledInput type={type} placeholder={placeholder} {...register} />
//     )
// }

// -------------------------------------------------------------

interface IInputProps {
    error: { message: string } | null;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({error, ...rest}, ref: ForwardedRef<HTMLInputElement>) => {
    return(
    <>
        <StyledInput ref={ref} {...rest} />
        {error ? <span>{error.message}</span>: null}
    </>
    )
})
