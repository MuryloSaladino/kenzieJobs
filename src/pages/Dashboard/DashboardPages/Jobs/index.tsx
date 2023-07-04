import { StyledDashboardMain } from "../../styles";
import { DashboardNavbar } from "../../../../components/DashboardNavbar";
import { StyledJobsDiv } from "./styles";
import { JobList } from "./JobsList";

import { Button } from "../../../../components/Button";
import { Link } from "react-router-dom";
import { Icon } from "../../../../components/Icon";
import { Title1 } from "../../../../styles/typography";

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

                <JobList/>

            </StyledDashboardMain>
        </>
    )
}