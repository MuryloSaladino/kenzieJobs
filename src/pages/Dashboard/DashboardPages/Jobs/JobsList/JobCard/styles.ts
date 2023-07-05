import styled from "styled-components";

export const StyledJobLi = styled.li`
    width: 100%;
    height: 122px;

    padding: 0 55px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: 0.3s;

    div{
        display: flex;
        gap: 15px;
    }

    :hover{
        background-color: var(--color-Lightblue);
    }
`