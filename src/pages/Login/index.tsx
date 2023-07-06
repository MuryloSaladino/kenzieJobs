import { StyledMain } from "./styles";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Navbar } from "../../components/Navbar/index";
import { Footer } from "../../components/Footer/index";
import { Label } from "../../styles/typography";
import loginImage from "../../assets/loginImage.svg";

import { Link } from "react-router-dom";

export function Login() {

    return(
        <>
            <Navbar/>
            <StyledMain>
                <img src={loginImage}/>
                <div>
                    <LoginForm/>
                    <Label color="var(--color-black)">
                        Não possui cadastro? <Link to="/register">Cadastre-se</Link>
                    </Label>
                </div>
            </StyledMain>
            <Footer/>
        </>
    )
}