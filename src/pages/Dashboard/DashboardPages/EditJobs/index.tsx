import { useContext } from "react"
import { UserDataContext } from "../../../../providers/UserDataContext"
import { StyledEditMain } from "./styles"
import { Link } from "react-router-dom"
import { Icon } from "../../../../components/Icon"
import { MenuText } from "../../../../styles/typography"

export function EditJobs() {

    const { currentJob, setCurrentJob } = useContext(UserDataContext)

    console.log(currentJob)

    

    return(
        <>
            <StyledEditMain>
                <Link to="/dashboard/jobs">
                    <Icon iconName="arrow_back" color="var(--color-blue)"/>
                    <MenuText color="var(--color-blue)">Voltar</MenuText>
                </Link>

                
            </StyledEditMain>
        </>
    )
}