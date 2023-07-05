import { useContext } from "react";
import { UserDataContext } from "../../../../../providers/UserDataContext";

import { StyledJobUl } from "./styles";
import { JobCard } from "./JobCard";

import { v4 as uuidv4 } from "uuid"

export function JobList() {

    const { jobs } = useContext(UserDataContext)

    return(
        <StyledJobUl>
            <JobCard element={
                {userId: 1,
                id: 1,
                position: "Developer Jr",
                sallary: 1000,
                description: "Junior Developer at Kenzie"}
            }/>
                {jobs && jobs.length > 0 ? jobs.map(element => <JobCard key={uuidv4()} element={element} />) : null}
        </StyledJobUl>
    )
}