import { StyledInput } from "./styles";
import { forwardRef, ForwardedRef } from "react";

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