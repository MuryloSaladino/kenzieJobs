import { StyledDashboardMain } from "../../styles";
import { DashboardNavbar } from "../../../../components/DashboardNavbar";
import { StyledJobsDiv } from "./styles";
import { JobCard } from "./JobCard";
import { Button } from "../../../../components/Button";
import { Icon } from "../../../../components/Icon";
import { Title1 } from "../../../../styles/typography";

import { useContext } from "react";
import { UserDataContext } from "../../../../providers/UserDataContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export function Jobs() {

    const { jobs } = useContext(UserDataContext);

    return(
        <>
            <StyledDashboardMain>
                <DashboardNavbar/>
                <StyledJobsDiv>
                    <Title1 color="var(--color-blue)" >Minhas vagas</Title1>
                    <Link to="/dashboard/create-jobs">
                        <Button buttonStyle="solid"><Icon iconName="add_circle"/>Criar vaga</Button>
                    </Link>
                </StyledJobsDiv>
                <ul>
                    {jobs && jobs.length > 0 ? jobs.map(element => <JobCard key={uuidv4()} element={element} />) : null}
                </ul>
            </StyledDashboardMain>
        </>
    )
}