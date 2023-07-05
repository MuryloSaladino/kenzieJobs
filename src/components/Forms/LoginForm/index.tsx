import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginSchema } from "./loginSchema";
import { StyledForm } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input/index";

export function LoginForm() {

    const {loginUser} = useContext(UserContext)

    const {register, handleSubmit, formState:{errors}} = useForm<TLoginFormValues>({
        resolver:zodResolver(loginSchema)
    })

    const loginUserForm:SubmitHandler<TLoginFormValues> = (formData) => {
        loginUser(formData)
    }

    return (
        <StyledForm onSubmit={handleSubmit(loginUserForm)} noValidate>
            <h3>Faça login</h3>
            <Input {...register("email")} type={"email"} placeholder={"E-mail"} error={errors.email} />
            <Input {...register("password")} type={"password"} placeholder={"Senha"} error={errors.password} />
            <button type="submit">Entrar</button>
        </StyledForm>
    )
}