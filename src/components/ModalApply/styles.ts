import styled from "styled-components";

export const StyledModal = styled.dialog`
    width: 100vw;
    height: 100vh;

    background-color: transparent;
    border: none;

    ::backdrop{
        background: rgba(132, 144, 255, 0.30);
    }
`

export const StyledModalDiv = styled.div`
    width: 98%;
    max-width: 542px;

    margin: 119px auto;
    background-color: var(--color-white);
    padding: 40px 40px 50px;
    background: var(--color-white);

    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;
    animation: fadeIn 0.3s;

    i{
        position: absolute;
        top: 10px;
        right: 14px;
        font-size: 2rem;
    }
`

export const StyledApplyForm = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
`