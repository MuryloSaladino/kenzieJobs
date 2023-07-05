import { useContext } from "react"
import { UserDataContext } from "../../../../providers/UserDataContext"
import { StyledEditMain } from "./styles"
import { Link } from "react-router-dom"
import { Icon } from "../../../../components/Icon"
import { MenuText, Title2 } from "../../../../styles/typography"
import { EditJobForm } from "../../../../components/Forms/EditJobForm"

export function EditJobs() {

    const { currentJob, setCurrentJob } = useContext(UserDataContext)

    return( 
        <>
            <StyledEditMain>
                <Link to="/dashboard/jobs" onClick={() => setCurrentJob(null)}>
                    <Icon iconName="arrow_back" color="var(--color-blue)"/>
                    <MenuText color="var(--color-blue)">Voltar</MenuText>
                </Link>

                {
                    currentJob ?
                    <Title2 color="var(--color-blue)">Editando: {currentJob?.position}</Title2> :
                    <Title2 color="var(--color-blue)">Nenhuma vaga selecionada</Title2>
                }

                <EditJobForm/>
                
            </StyledEditMain>
        </>
    )
}