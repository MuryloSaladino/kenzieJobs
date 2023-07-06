import styled from "styled-components";

export const StyledEditMain = styled.main`
    width: 98%;
    max-width: 1328px;
    margin: 30px auto;

    display: flex;
    flex-direction: column;
    gap: 50px;

    a{
        display: flex;
        align-items: center;
        gap: 10px;

        transition: 0.3s;

        :hover{
            gap: 3px;
        }
    }
`