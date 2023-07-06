import styled from "styled-components";

interface IStyledHomeCardJobLiProps{
    open: boolean;
}

export const StyledHomeCardJobLi = styled.li<IStyledHomeCardJobLiProps>`
    width: 100%;
    min-height: 60px;
    padding: 10px 100px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    position: relative;
    transition: 0.3s;
    cursor: pointer;

    :hover{
        background-color: var(--color-Lightblue);
    }
    
    p{
        ${({open}) => open ? null : "display: none;"}
    }
    i{
        position: absolute;
        top: 10px;
        left: 10px;
    }
    button{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    >div{
        width: 80%;
        height: 60px;

        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`