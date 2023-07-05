import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginSchema } from "./loginSchema";
import { StyledForm } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input/index";
import { Title1 } from "../../../styles/typography";
import { Button } from "../../Button";

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
            <Title1 color={"var(--color-blue)"}>Faça login</Title1>
            <Input {...register("email")} type={"email"} placeholder={"E-mail"} error={errors.email} />
            <Input {...register("password")} type={"password"} placeholder={"Senha"} error={errors.password} />
            <div>
                <Button buttonStyle={"solid"}>Entrar</Button>
            </div>
        </StyledForm>
    )
}