import styled from "styled-components";

export const StyledInput = styled.input`
    width: 100%;
    max-width: 542px;
    box-sizing: border-box;
    
    padding: 23px 35px;
    border: solid 1px var(--color-blue);
    border-radius: 255px;

    color: var(--color-black);
    font-size: 1rem;
    font-weight: 700;

    ::placeholder{
        color: rgba(16, 17, 26, 0.50);
        font-size: 1rem;
        font-weight: 700;
    }

    :focus::placeholder{
        color: transparent;
    }
`