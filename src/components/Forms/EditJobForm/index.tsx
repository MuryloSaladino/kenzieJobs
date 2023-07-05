import { StyledEditJobForm } from "./styles";
import { Input } from "../../Input";
import { Button } from "../../Button";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEditJobFormValues, editJobSchema } from "./editJobSchema";
import { kenzieJobs } from "../../../service/api";
import { toast } from "react-toastify"
import { useContext, useEffect } from "react";
import { UserDataContext } from "../../../providers/UserDataContext";
import { TextArea } from "../../Textarea";
import { useNavigate } from "react-router-dom";

export function EditJobForm() {

    const { updateJobs, currentJob } = useContext(UserDataContext)
    const navigate = useNavigate()

    const {register, handleSubmit, formState:{errors}, reset} = useForm<TEditJobFormValues>({
        resolver: zodResolver(editJobSchema)
    })

    useEffect(() => {
        reset({position: currentJob?.position, sallary: currentJob?.sallary.toString(), description: currentJob?.description})
        currentJob ? null : navigate("/dashboard/jobs")
    }, [])


    const editJobForm:SubmitHandler<TEditJobFormValues> = async (formData) => {
        const newJob = {userId: localStorage.getItem("@USERID"), ...formData}

        try {
            await kenzieJobs.put(`/jobs/${currentJob?.id}`, newJob, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Vaga editada com sucesso!")
            reset({position: "", sallary: "", description: ""})
            updateJobs()
            navigate("/dashboard/jobs")
        } catch (error) {
            console.error(error)
            toast.error("Oops! Algo deu errado.")
        }
    }

    return(
        <StyledEditJobForm onSubmit={handleSubmit(editJobForm)}>
            <div>
                <div>
                    <Input {...register("position")} placeholder={"Cargo"} error={errors.position} />
                    <Input {...register("sallary")} placeholder={"Salário (opcional)"} />
                </div>
                <TextArea {...register("description")} placeholder={"Descrição"} error={errors.description} />
            </div>
            <Button buttonStyle="solid">Editar Vaga</Button>
        </StyledEditJobForm>
    )
}