import styled from "styled-components";

export const StyledMain =styled.main`
    max-width: 1328px;
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
`