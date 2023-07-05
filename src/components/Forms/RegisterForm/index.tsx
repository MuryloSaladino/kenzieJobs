import { SubmitHandler ,useForm } from "react-hook-form";
import { StyledForm } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterFormValues, registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../../Input/index";

export function RegisterForm() {

    const {registerUser} = useContext(UserContext)

    const {register, handleSubmit, formState:{errors}} = useForm<TRegisterFormValues>({
        resolver:zodResolver(registerSchema)
    })

    const registerUserForm:SubmitHandler<TRegisterFormValues> = (formData) => {
        const newFormdata = {
            name:formData.name,
            email:formData.email,
            password:formData.password
        }
        console.log(newFormdata)
        registerUser(newFormdata)
    }

    return (
        <StyledForm onSubmit={handleSubmit(registerUserForm)} noValidate>
            <Input placeholder={"name"} {...register("name")} type={"text"} error={errors.name} />
            <Input placeholder={"E-mail"} {...register("email")} type={"email"} error={errors.email} />
            <Input placeholder={"Senha"} {...register("password")} type={"password"} error={errors.password} />
            <Input placeholder={"Confirmar senha"} {...register("confirm")} type={"password"} error={errors.confirm} />
            <button type="submit">Cadastrar-se</button>
        </StyledForm>
    )
}