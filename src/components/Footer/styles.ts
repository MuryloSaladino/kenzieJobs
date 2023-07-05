import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: var(--color-black);
    position: absolute;
    bottom: 0;

    div{
        height: 103px;
        width: 98%;
        max-width: 1328px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
            height: 30px;
        }
    }

    @media(max-width: 580px){
        div{
            height: 204px;
            flex-direction: column;
            justify-content: space-around;

            p{
                text-align: center;
            }
        }
    }
`