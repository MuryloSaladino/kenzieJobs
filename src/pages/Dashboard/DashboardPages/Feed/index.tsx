import { DashboardNavbar } from "../../../../components/DashboardNavbar";
import { Paragraph, Title1 } from "../../../../styles/typography";
import { StyledDashboardMain } from "../../styles";

export function Feed() {
    return(
        <>
            <StyledDashboardMain>
                <Title1 color="var(--color-blue)" >{"Nome da empresa"}</Title1>
                <Paragraph>Seja bem vindo (a), selecione uma das opções abaixo:</Paragraph>

                <DashboardNavbar/>
            </StyledDashboardMain>
        </>
    )
}