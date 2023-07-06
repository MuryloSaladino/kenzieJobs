import { useContext, useState } from "react";
import { HomeContext } from "../../providers/HomeContext";
import { StyledHomeCardJobLi } from "./styles";
import { Icon } from "../Icon";
import { Label, Paragraph, Title3 } from "../../styles/typography";
import { Button } from "../Button";

interface IJob {
    userId: number;
    id: number;
    position: string;
    sallary: number;
    description: string;
}
interface IHomeJobCardProps{
    job: IJob;
}

export function HomeJobCard({job}:IHomeJobCardProps) {

    const { openApplyModal, setCurrentJobToApply, allCompanies } = useContext(HomeContext);
    const [open, setOpen] = useState<boolean>(false)

    return(
        <StyledHomeCardJobLi open={open} onClick={() => open ? setOpen(false) : setOpen(true)}>
            <Icon iconName={open ? "remove" : "add"} color="var(--color-blue)"/>
            <div>
                <Label>{allCompanies.find(company => company.id === job.userId)?.name}</Label>
                <Title3>{job.position}</Title3>
            </div>
            <Button handleClick={() => {openApplyModal();setCurrentJobToApply(job)}} buttonStyle="outline">Cadastrar-se</Button>
            <Paragraph>{job.description}</Paragraph>
        </StyledHomeCardJobLi>
    )
}