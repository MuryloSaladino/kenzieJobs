import { useContext } from "react";
import { UserDataContext } from "../../../../../providers/UserDataContext";
import { JobCard } from "./JobCard";

import { v4 as uuidv4 } from "uuid";

export function JobList() {

    const { jobs } = useContext(UserDataContext)

    return(
        <ul>
            {jobs && jobs.length > 0 ? jobs.map(element => <JobCard key={uuidv4()} element={element} />) : null}
        </ul>
    )
}