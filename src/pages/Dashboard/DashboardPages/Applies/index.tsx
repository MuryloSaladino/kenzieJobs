import { StyledDashboardMain } from "../../styles";
import { DashboardNavbar } from "../../../../components/DashboardNavbar";
import { StyledAppliesDiv } from "./styles";
import { Title1 } from "../../../../styles/typography";

import { useContext } from "react";
import { UserDataContext } from "../../../../providers/UserDataContext";
import { ApplyCard } from "./AppliesList";

export function Applies() {

    const { applies } = useContext(UserDataContext)

    return(
        <>
             <StyledDashboardMain>
                <DashboardNavbar/>

                <StyledAppliesDiv>
                    <Title1 color="var(--color-blue)">Minhas candidaturas</Title1>

                    <ul>
                        {applies && applies.length > 0 ? applies.map(element => <ApplyCard element={element} />) : null}
                    </ul>
                </StyledAppliesDiv>
            </StyledDashboardMain>
        </>
    )
}