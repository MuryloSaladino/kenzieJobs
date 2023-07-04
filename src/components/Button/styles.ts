import styled from "styled-components";

interface IStyledButtonProps{
    buttonStyle: 'solid' | 'outline'
}

export const StyledButton = styled.button<IStyledButtonProps>`
    width: max-content;
    height: 58px;

    background-color: ${({buttonStyle}) => buttonStyle === 'outline' ? 'transparent' : 'var(--color-blue)'};
    padding: 18px 36px;
    border: solid 1px var(--color-blue);
    border-radius: 255px;

    font-size: 1.0625rem;
    font-weight: 700;
    color: ${({buttonStyle}) => buttonStyle === 'outline' ? 'var(--color-blue)' : 'var(--color-white)'};

    transition: 0.3s;

    :hover{
        background-color: var(--color-Lightblue);
        ${({buttonStyle}) => buttonStyle === 'solid' ? 'color: var(--color-blue);' : null};
    }
`