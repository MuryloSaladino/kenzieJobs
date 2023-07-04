import { StyledJobLi } from "./styles";

interface IJobs{
    userId: number,
    id: number,
    position: string,
    sallary: number,
    description: string
}

interface IJobCardProps{
    element: IJobs
}

export function JobCard({element}: IJobCardProps) {
    return(
        <StyledJobLi>
            
        </StyledJobLi>
    )
}