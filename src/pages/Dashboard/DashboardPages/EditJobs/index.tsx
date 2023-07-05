import { useContext } from "react"
import { UserDataContext } from "../../../../providers/UserDataContext"
import { StyledEditMain } from "./styles"

export function EditJobs() {

    const { currentJob, setCurrentJob } = useContext(UserDataContext)

    console.log(currentJob)

    

    return(
        <>
            <StyledEditMain>
                
            </StyledEditMain>
        </>
    )
}