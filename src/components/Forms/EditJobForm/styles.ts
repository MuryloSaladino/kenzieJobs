import styled from "styled-components";

export const StyledEditJobForm = styled.form`
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;

    >div{
        width: 100%;
        display: flex;
        gap: 45px;
    }
    >div>div{
        width: 100%;
        max-width: 639px;
        display: flex;
        flex-direction: column;
        gap: 17px
    }
    input, textarea{
        max-width: 639px;
    }

    @media(max-width: 580px) {
        >div{
            flex-direction: column;
        }
    }
`