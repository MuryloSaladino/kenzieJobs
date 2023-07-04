import { useContext } from "react";
import { UserContext } from "../../../../../providers/UserContext";

import { StyledJobUl } from "./styles";
import { JobCard } from "./JobCard";

import { v4 as uuidv4 } from "uuid"

export function JobList() {

    //const { jobs, updateJobs } = useContext(UserContext)

    return(
        <StyledJobUl>
            {/*jobs.map(element => <JobCard key={uuidv4()} element={element} />)*/}
        </StyledJobUl>
    )
}