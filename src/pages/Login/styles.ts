import styled from "styled-components";

export const StyledMain =styled.main`
    background-color: blueviolet;
    max-width: 1328px;
    margin: 60px auto 0;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 60px;

    div {
        background-color: aliceblue;
    }
`

export const StyledSpan = styled.span`
    color: aliceblue;
    background-color: antiquewhite;

    a {
        color: var(--color-blue);
    }
`