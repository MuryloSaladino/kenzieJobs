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
            <input type="text" {...register("name")} placeholder="Nome da empresa" />
            {errors.name ? <span>{errors.name.message}</span>:null}

            {/* <input type="email" {...register("email")} placeholder="E-mail" />
            {errors.email ? <span>{errors.email.message}</span>:null} */}
            <Input placeholder={"E-mail"} {...register("email")} type="email" error={errors.email} />
            
            <input type="password"  {...register("password")} placeholder="Senha" />
            {errors.password ? <span>{errors.password.message}</span>:null}
            <input type="password" {...register("confirm")} placeholder="Confirmar senha" />
            {errors.confirm ? <span>{errors.confirm.message}</span>:null}

            <button type="submit">Cadastrar-se</button>
        </StyledForm>
    )
}