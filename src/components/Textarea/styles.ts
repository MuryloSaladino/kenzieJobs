import styled from "styled-components";

export const StyledTextarea = styled.textarea`
    height: 236px;
    width: 100%;
    max-width: 542px;

    padding: 23px 35px;
    border: solid 1px var(--color-blue);
    border-radius: 30px;

    color: var(--color-black);
    font-size: 1rem;
    font-weight: 700;

    box-sizing: border-box;

    resize: none;

    ::placeholder{
        color: rgba(16, 17, 26, 0.50);
        font-size: 1rem;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
    }

    :focus::placeholder{
        color: transparent;
    }

    ::-webkit-scrollbar{
        width: 5px;
    }
`