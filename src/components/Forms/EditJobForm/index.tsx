import { StyledEditJobForm } from "./styles";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { Icon } from "../../Icon";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEditJobFormValues, editJobSchema } from "./editJobSchema";
import { kenzieJobs } from "../../../service/api";
import { toast } from "react-toastify"
import { useContext } from "react";
import { UserDataContext } from "../../../providers/UserDataContext";

export function CreateJobForm() {

    const { updateJobs } = useContext(UserDataContext)

    const {register, handleSubmit, formState:{errors}, reset} = useForm<TEditJobFormValues>({
        resolver: zodResolver(editJobSchema)
    })

    const createJobForm:SubmitHandler<TEditJobFormValues> = async (formData) => {
        const newJob = {userId: localStorage.getItem("@USERID"), ...formData}

        try {
            await kenzieJobs.post("/jobs", newJob, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Vaga criada com sucesso!")
            reset({position: "", sallary: "", description: ""})
            updateJobs()
        } catch (error) {
            console.error(error)
            toast.error("Oops! Algo deu errado.")
        }
    }

    return(
        <StyledEditJobForm onSubmit={handleSubmit(createJobForm)}>
            <Input {...register("position")} placeholder={"Cargo"} error={errors.position} />
            <Input {...register("sallary")} placeholder={"Salário (opcional)"} />
            <Input {...register("description")} placeholder={"Descrição"} error={errors.description} />
            <Button buttonStyle="solid"><Icon iconName="add_circle"/>Criar Vaga</Button>
        </StyledEditJobForm>
    )
}