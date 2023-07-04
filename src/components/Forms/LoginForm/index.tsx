import { useForm } from "react-hook-form";

export function LoginForm() {

    const {register, handleSubmit} = useForm()

    function submit () {
        console.log("1")
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="password" placeholder="E-mail"/>
            <input type="text" placeholder="Password"/>
            <button type="submit">Entrar</button>
        </form>
    )
}