import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledApplyForm } from "./styles";
import { TApplyFormValues, applySchema } from "./applySchema";
import { SubmitHandler, useForm } from "react-hook-form";

export function ApplyForm() {

    const {register, handleSubmit, formState:{errors}, reset} = useForm<TApplyFormValues>({
        resolver: zodResolver(applySchema)
    })

    const applyRequest:SubmitHandler<TApplyFormValues> = (formData) => {
        console.log(formData)
        const newApply = {}
    }

    return(
        <StyledApplyForm onSubmit={handleSubmit(applyRequest)}>
            <Input {...register("name")} placeholder="Nome"/>
            <Input {...register("email")} placeholder="E-mail"/>
            <Input {...register("linkedin")} placeholder="Linkedin"/>
            <Button buttonStyle="solid">Candidatar-se</Button>
        </StyledApplyForm>
    )
}