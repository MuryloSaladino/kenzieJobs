import { StyledForm } from "./style";
import { Input } from "../../Input/index";
import { Button } from "../../Button";
import { Title1 } from "../../../styles/typography";

import { SubmitHandler ,useForm } from "react-hook-form";
import { TRegisterFormValues, registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export function RegisterForm() {

    const {registerUser} = useContext(UserContext);

    const {register, handleSubmit, formState:{errors}} = useForm<TRegisterFormValues>({
        resolver:zodResolver(registerSchema)
    })

    const registerUserForm:SubmitHandler<TRegisterFormValues> = (formData) => {
        const newFormdata = {
            name:formData.name,
            email:formData.email,
            password:formData.password
        }
        registerUser(newFormdata);
    }

    return ( 
        <StyledForm onSubmit={handleSubmit(registerUserForm)} noValidate>
            <Title1 color="var(--color-blue)">Cadastre-se</Title1>
            <Input placeholder={"Nome da empresa"} {...register("name")} type={"text"} error={errors.name} />
            <Input placeholder={"E-mail"} {...register("email")} type={"email"} error={errors.email} />
            <Input placeholder={"Senha"} {...register("password")} type={"password"} error={errors.password} />
            <Input placeholder={"Confirmar senha"} {...register("confirm")} type={"password"} error={errors.confirm} />
            <div>
                <Button buttonStyle="solid">Cadastrar-se</Button>
            </div>
        </StyledForm>
    )
}