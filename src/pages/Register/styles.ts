import styled from "styled-components";

export const StyledMain = styled.main`
    max-width: 1328px;
    margin: 0 auto 120px ;
    width: 98%;

    div {
        a {
            display: flex;
            align-items: center;
            gap: 10px;

            transition: 1s;

            :hover {
                gap:3px;
            }
        }
    }

    section {
        margin: 0 auto;
    }

    @media(max-width: 580px) {
        
        >div {
            padding-inline: 12px;
        }
        section {
            padding-inline: 12px;
        }
    }
`