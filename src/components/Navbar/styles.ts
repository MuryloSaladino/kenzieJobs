import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: var(--color-white);
`

export const StyledNav = styled.nav`
    height: 90px;
    width: 95%;
    max-width: 1296px;

    margin: 0 auto;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;

    position: relative;

    img{
        position: absolute;
        left: 0;
        top: center;
    }

    @media(max-width: 580px) {

        justify-content: center;
    
        img{
            height: 24px;
            left: 12px;
            top: 21px;
        }

        b{
            align-self: flex-end;
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