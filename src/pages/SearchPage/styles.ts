import styled from "styled-components";

interface IStyledSearchPageMainProps{
   searching: boolean;
}

export const StyledSearchPageMain = styled.main<IStyledSearchPageMainProps>`
   width: 98%;
   max-width: 1328px;
   min-height: 60vh;
   margin: 0 auto;
   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: ${({searching}) => searching ? "space-around" : "center"};
   gap: 52px;
   
   i{
      font-size: 1.75rem;
   }
`

export const StyledSearchDiv = styled.div`
   width: 100%;
   max-width: 628px;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;

   transition: 0.3s;

   form{
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px
   }
`

export const StyledSearchUl = styled.ul`
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
`