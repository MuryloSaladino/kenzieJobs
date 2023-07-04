import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";

export function Login() {

    return(
        <>
            <header>header</header>
            <main>
                <img src="" alt="" />

                <LoginForm/>

                <span>Não possui cadastro? <Link to={"/register"} >Cadastre-se</Link></span>
            </main>
            <footer>footer</footer>
        </>
    )
}