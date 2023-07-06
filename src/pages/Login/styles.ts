import styled from "styled-components";

export const StyledMain =styled.main`
    max-width: 1328px;
    width: 98%;
    margin: 60px auto 120px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 60px;

    div {
        display: flex;
        flex-direction: column;
        gap: 40px;

        label {
            text-align:center ;
            a {
                color: var(--color-blue);
            }
        }
    }

    @media (max-width: 1240px) {

        img {
            display: none;
        }

        >div {

            width:100%;
        }

        form {
            margin:0 auto;
            width: 100%;
        }
    }

    @media(max-width: 580px) {
        
        >div {
            padding-inline: 12px;
        }
    }
`