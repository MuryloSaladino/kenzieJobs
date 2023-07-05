import { StyledCreateJobForm } from "./styles";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { Icon } from "../../Icon";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCreateJobFormValues, createJobSchema } from "./createJobSchema";

export function CreateJobForm() {

    const {register, handleSubmit, formState:{errors}} = useForm<TCreateJobFormValues>({
        resolver: zodResolver(createJobSchema)
    })

    const createJobForm:SubmitHandler<TCreateJobFormValues> = (formData) => {
        console.log(formData)
    }

    return(
        <StyledCreateJobForm onSubmit={handleSubmit(createJobForm)}>
            <Input {...register("position")} placeholder={"Cargo"} error={errors.position} />
            <Input {...register("sallary")} placeholder={"Salário (opcional)"} />
            <Input {...register("description")} placeholder={"Descrição"} error={errors.description} />
            <Button buttonStyle="solid"><Icon iconName="add_circle"/>Criar Vaga</Button>
        </StyledCreateJobForm>
    )
}