import { StyledTextarea } from "./styles";
import { BoldAlert } from "../../styles/typography";

import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    error?: FieldError | undefined;
}

export const TextArea = forwardRef(({error, ...rest}:ITextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return(
    <>
        <StyledTextarea ref={ref} {...rest} />
        {error ? <BoldAlert color="red">{error.message}</BoldAlert>: null}
    </>
    )
})
