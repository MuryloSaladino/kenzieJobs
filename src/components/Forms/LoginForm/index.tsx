import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginSchema } from "./loginSchema";
import { StyledForm } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export function LoginForm() {

    const {loginUser} = useContext(UserContext)

    const {register, handleSubmit, formState:{errors}} = useForm<TLoginFormValues>({
        resolver:zodResolver(loginSchema)
    })

    const loginUserForm:SubmitHandler<TLoginFormValues> = (formData) => {
        console.log(formData)
        loginUser(formData)
    }

    return (
        <StyledForm onSubmit={handleSubmit(loginUserForm)} noValidate>
            <h3>Faça login</h3>
            <input type="text" placeholder="E-mail" {...register("email")}/>
            {errors.email? <span>{errors.email.message}</span>:null}
            <input type="password" placeholder="Password"{...register("password") } />
            {errors.email? <span>{errors.email.message}</span>:null}
            <button type="submit">Entrar</button>
        </StyledForm>
    )
}