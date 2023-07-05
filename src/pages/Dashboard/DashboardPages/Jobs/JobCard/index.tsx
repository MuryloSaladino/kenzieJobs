import { StyledJobLi } from "./styles";
import { Icon } from "../../../../../components/Icon";
import { Title3 } from "../../../../../styles/typography";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../../../../../providers/UserDataContext";

import { kenzieJobs } from "../../../../../service/api";
import { toast } from "react-toastify"


interface IJobs{
    userId: number,
    id: number,
    position: string,
    sallary: number,
    description: string
}

interface IJobCardProps{
    element: IJobs;
}


export function JobCard({element}: IJobCardProps) {

    const navigate = useNavigate()
    const { updateJobs, setCurrentJob } = useContext(UserDataContext)
    
    function handleEdit() {
        setCurrentJob(element)
        navigate("/dashboard/edit-jobs")
    }

    async function handleDelete() {
        const token = localStorage.getItem("@TOKEN")
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            await kenzieJobs.delete(`/jobs/${element.id}`, options)
            updateJobs()
            toast.success("Vaga excluída!")
        } catch (error) {
            toast.error("Oops! Parece que algo deu errado")
        }
    }

    return(
        <StyledJobLi>
            <Title3>{element.position}</Title3>

            <div>
                <Icon 
                    iconName="edit" 
                    color="var(--color-blue)"
                    handleClick={handleEdit}
                />
                <Icon
                    iconName="delete"
                    color="var(--color-blue)"
                    handleClick={handleDelete}
                />
            </div>
        </StyledJobLi>
    )
}