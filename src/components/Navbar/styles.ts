import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: var(--color-white);

    position: absolute;
    top: 0;
`

export const StyledNav = styled.nav`
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

    @media(max-width: 580px) {

        height: 119px;
        padding-bottom: 28px;
        justify-content: center;
        align-items: flex-end;
        gap: 0;
    
        img{
            height: 24px;
            left: 12px;
            top: 21px;
        }
        button{
            display: none;
        }
        i{
            position: absolute;
            right: 12px;
            top: 21px;
        }
    }
`