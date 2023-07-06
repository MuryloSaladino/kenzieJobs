import styled from "styled-components";

interface IStyledHomeCardJobLiProps{
    open: boolean;
}

export const StyledHomeCardJobLi = styled.li<IStyledHomeCardJobLiProps>`
    width: 100%;
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
        min-height: 60px;

        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media(max-width: 580px){
        gap: 20px;
        padding: 0 0 0 50px;
        button{
            position: static;
        }
    }
`