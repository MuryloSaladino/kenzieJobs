import { Button } from "../Button";
import { Input } from "../Input";
import { StyledApplyForm, StyledModal } from "./styles";
import { BoldAlert, Paragraph, Title2 } from "../../styles/typography";

import { TApplyFormValues, applySchema } from "./applySchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { kenzieJobs } from "../../service/api";
import { toast } from "react-toastify"
import { Icon } from "../Icon";

export function ApplyForm() {

    const {currentJobToApply, closeApplyModal} = useContext(UserContext)
    const [companyName, setCompanyName] = useState("")

    const {register, handleSubmit, formState:{errors}, reset} = useForm<TApplyFormValues>({
        resolver: zodResolver(applySchema)
    })

    const applyRequest:SubmitHandler<TApplyFormValues> = async (formData) => {
        const newApply = {jobId: currentJobToApply?.id, userId: currentJobToApply?.userId, ...formData};
        try {
            await kenzieJobs.post("/applications", newApply)
            toast.success("Cadidatura registrada!")
            reset({name: "", email: "", linkedin: ""})
            closeApplyModal()
        } catch (error) {
            console.error(error)
            toast.error("Oops! Parece que deu algo errado na candidatura")
        }
    }

    useEffect(() => {
        async function getCompanyName() {
            try {
                const {data} = await kenzieJobs.get(`/users/${currentJobToApply?.userId}`)
                setCompanyName(data.name)
            } catch (error) {
                console.error(error)
                toast.error("Oops! Parece que deu algo errado")
            }
        }
        getCompanyName()
    }, [currentJobToApply])


    return(
        <StyledModal>
            <Title2>Candidatar-se</Title2>
            <Paragraph>
                Você está se canditando para 
                <BoldAlert>{currentJobToApply?.position}</BoldAlert>
                em
                <BoldAlert>{companyName}</BoldAlert>
            </Paragraph>
            <StyledApplyForm onSubmit={handleSubmit(applyRequest)}>
                <Input {...register("name")} placeholder="Nome" error={errors.name}/>
                <Input {...register("email")} placeholder="E-mail" error={errors.email}/>
                <Input {...register("linkedin")} placeholder="Linkedin" error={errors.linkedin}/>
                <Button buttonStyle="solid">Candidatar-se</Button>
            </StyledApplyForm>
            <Icon iconName="remove" handleClick={() => closeApplyModal()}/>
        </StyledModal>
    )
}