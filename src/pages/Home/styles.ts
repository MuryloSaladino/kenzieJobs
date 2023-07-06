import styled from "styled-components";

export const StyledSection1 = styled.section`
    width: 100%;
    background: var(--color-blue);
    padding: 100px 0;
    div{
        width: 98%;
        max-width: 1328px;
        margin: auto;
    }
    @media(max-width: 580px){
        padding: 70px 25px;
    }
`

export const StyledSection2 = styled.section`
    width: 98%;
    max-width: 1328px;
    margin: 90px auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 75px;

    div{
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
    p{
        max-width: 500px;
    }
    img{
        max-width: 100%;
    }
`

export const StyledSection3 = styled.section`
    height: max-content;
    width: 98%;
    max-width: 1328px;
    margin: 112px auto;

    h1{
        margin: 20px auto;
        text-align: center;
    }
`

export const StyledHomeUl = styled.ul`
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
`