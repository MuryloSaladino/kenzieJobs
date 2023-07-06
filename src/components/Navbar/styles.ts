import styled from "styled-components";

interface IStyledNavProps{
    user?: boolean;
}

export const StyledHeader = styled.header`
    width: 100%;
    background-color: var(--color-white);

    position: absolute;
    top: 0;
`

export const StyledNav = styled.nav<IStyledNavProps>`
    height: 90px;
    width: 98%;
    max-width: 1328px;

    margin: 0 auto;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;

    position: relative;

    img{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
    }
    >div{
        display: flex;
        gap: 15px;
    }

    @media(max-width: 580px) {

        height: 119px;
        ${({user}) => user ? null : "padding-bottom: 28px;"}
        justify-content: center;
        align-items: flex-end;
        gap: 0;
    
        img{
            height: 24px;
            left: 12px;
            ${({user}) => user ? "top: 50px;" : "top: 21px;"}
        }
        button{
            ${({user}) => user ? "" : "display: none;"}
        }
        i{
            position: absolute;
            right: 12px;
            top: 21px;
        }
        >div{
            position: absolute;
            top: 21px;
            right: 12px;
        }
    }
`