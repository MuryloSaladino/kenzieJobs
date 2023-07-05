import styled from "styled-components";

export const StyledJobsDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 580px){
        flex-direction: column;
        align-items: center;
        gap: 20px;

        h1{
            text-align: center;
        }
    }
`