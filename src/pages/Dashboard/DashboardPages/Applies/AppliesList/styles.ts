import styled from "styled-components";

interface StyledApplyLiProps{
    open: boolean;
}

export const StyledApplyLi = styled.li<StyledApplyLiProps>`
    height: ${({open}) => open ? "max-content" : "118px" };
    width: 100%;

    padding: 55px 47px;

    display: flex;
    flex-direction: column;
    gap: 37px;

    position: relative;
    transition: 0.3s;

    :hover{
        background-color: var(--color-Lightblue);
    }

    p{
        ${({open}) => open ? null : "display: none;"}
    }

    i{
        position: absolute;
        top: 37px;
        right: 47px;
    }

    div{
        display: flex;
        gap: 10px;
    }
`