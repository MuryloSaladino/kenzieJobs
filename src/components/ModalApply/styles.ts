import styled from "styled-components";

export const StyledModal = styled.dialog`
    width: 98%;
    max-width: 650px;
    margin: 135px auto;

    background-color: var(--color-white);
    padding: 40px 40px 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    gap: 20px;

    position: relative;

    i{
        position: absolute;
        top: 10px;
        right: 14px;
    }

    ::backdrop{
        background: rgba(132, 144, 255, 0.30);
    }
`

export const StyledApplyForm = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
`