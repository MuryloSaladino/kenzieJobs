import { Link } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { DashboardNavbar } from "../../../../components/DashboardNavbar";
import { Icon } from "../../../../components/Icon";
import { Title1 } from "../../../../styles/typography";
import { StyledDashboardMain } from "../../styles";
import { StyledJobsDiv } from "./styles";

export function Jobs() {
    return(
        <>
            <StyledDashboardMain>
                <DashboardNavbar/>

                <StyledJobsDiv>
                    <Title1>Minhas vagas</Title1>
                    <Link to="/dashboard/create-jobs">
                        <Button buttonStyle="solid"><Icon iconName="add_circle"/>Criar vaga</Button>
                    </Link>
                </StyledJobsDiv>
                

            </StyledDashboardMain>
        </>
    )
}