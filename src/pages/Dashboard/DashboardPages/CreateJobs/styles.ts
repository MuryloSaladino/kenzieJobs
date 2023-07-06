import styled from "styled-components";

export const StyledCreateJobMain = styled.main`
    width: 98%;
    max-width: 1328px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 30px;


    h1{
        align-self: center;
    }
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