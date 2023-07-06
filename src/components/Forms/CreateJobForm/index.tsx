import { StyledCreateJobForm } from "./styles";
import { Input } from "../../Input";
import { TextArea } from "../../Textarea";
import { Button } from "../../Button";
import { Icon } from "../../Icon";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCreateJobFormValues, createJobSchema } from "./createJobSchema";
import { kenzieJobs } from "../../../service/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserDataContext } from "../../../providers/UserDataContext";

export function CreateJobForm() {

    const { updateJobs } = useContext(UserDataContext);

    const {register, handleSubmit, formState:{errors}, reset} = useForm<TCreateJobFormValues>({
        resolver: zodResolver(createJobSchema)
    })

    const createJobForm:SubmitHandler<TCreateJobFormValues> = async (formData) => {
        const newJob = {userId: localStorage.getItem("@USERID"), ...formData};

        try {
            await kenzieJobs.post("/jobs", newJob, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`
                }
            })
            toast.success("Vaga criada com sucesso!");
            reset({position: "", sallary: "", description: ""});
            updateJobs();
        } catch (error) {
            console.error(error);
            toast.error("Oops! Algo deu errado.");
        }
    }

    return(
        <StyledCreateJobForm onSubmit={handleSubmit(createJobForm)}>
            <Input {...register("position")} placeholder={"Cargo"} error={errors.position} />
            <Input {...register("sallary")} placeholder={"Salário (opcional)"} />
            <TextArea {...register("description")} placeholder={"Descrição"} error={errors.description} />
            <Button buttonStyle="solid"><Icon iconName="add_circle"/>Criar Vaga</Button>
        </StyledCreateJobForm>
    )
}