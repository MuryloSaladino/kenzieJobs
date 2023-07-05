import { StyledInput } from "./styles";
import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";
import { FieldError } from 'react-hook-form';
import { BoldAlert } from "../../styles/typography";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError | undefined;
}

export const Input = forwardRef(({error, ...rest}:IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return(
    <>
        <StyledInput ref={ref} {...rest} />
        {error ? <BoldAlert color="red">{error.message}</BoldAlert>: null}
    </>
    )
})
