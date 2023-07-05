import { Link } from "react-router-dom";
import { CreateJobForm } from "../../../../components/Forms/CreateJobForm";
import { Icon } from "../../../../components/Icon";
import { MenuText, Title1 } from "../../../../styles/typography";
import { StyledCreateJobMain } from "./styles";

export function CreateJobs() {
    return(
        <>
            <StyledCreateJobMain>
                <Link to="/dashboard/jobs">
                    <Icon iconName="arrow_back" color="var(--color-blue)"/>
                    <MenuText color="var(--color-blue)">Voltar</MenuText>
                </Link>
                

                <Title1 color="var(--color-blue)">Criar vaga</Title1>

                <CreateJobForm/>
            </StyledCreateJobMain>
        </>
    )
}