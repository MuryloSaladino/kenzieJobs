import { useContext, useState } from "react";
import { Icon } from "../../../../../components/Icon";
import { Paragraph, Title3 } from "../../../../../styles/typography";
import { StyledApplyLi } from "./styles";
import { UserDataContext } from "../../../../../providers/UserDataContext";

import { v4 as uuidv4 } from "uuid";

interface IApplyCardProps{
    element: IApplies;
}

interface IApplies{
    id: number,
    jobId: number,
    userId: number,
    name: string,
    email: string,
    linkedin: string
}

export function ApplyCard({element}: IApplyCardProps) {

    const { jobs } = useContext(UserDataContext)

    const [open, setOpen] = useState<boolean>(false)
    const jobName = jobs.find(job => job.id === element.jobId)?.position

    function switchOpen() {
        open ? setOpen(false) : setOpen(true) 
    }


    return(
        <StyledApplyLi open={open} >
            <Title3>{element.name} - {jobName ? jobName : ""}</Title3>

            <Paragraph>Detalhes da candidatura:</Paragraph>
            <div><Paragraph>Email: </Paragraph><Paragraph bold={true}>{element.email}</Paragraph></div>

            <Icon key={uuidv4()} iconName={open ? "remove" : "add"} color="var(--color-blue)" handleClick={switchOpen} />
        </StyledApplyLi>
    )
}