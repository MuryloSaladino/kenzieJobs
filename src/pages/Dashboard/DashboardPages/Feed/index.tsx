import { useContext } from "react";
import { DashboardNavbar } from "../../../../components/DashboardNavbar";
import { Paragraph, Title1 } from "../../../../styles/typography";
import { StyledDashboardMain } from "../../styles";
import { UserContext } from "../../../../providers/UserContext";

export function Feed() {

    const { user } = useContext(UserContext)

    return(
        <>
            <StyledDashboardMain>
                <Title1 color="var(--color-blue)" >{user?.name}</Title1>
                <Paragraph>Seja bem vindo(a), selecione uma das opções abaixo:</Paragraph>

                <DashboardNavbar/>
            </StyledDashboardMain>
        </>
    )
}