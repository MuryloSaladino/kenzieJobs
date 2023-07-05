import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Footer } from "../../components/Footer/index";
import { Navbar } from "../../components/Navbar/index";
import { StyledMain } from "./styles";
import loginImage from "../../assets/loginImage.svg";
import { Label } from "../../styles/typography";

export function Login() {

    return(
        <>
            <Navbar/>
            <StyledMain>
                <img src={loginImage}/>
                <div>
                    <LoginForm/>
                    <Label color={"var(--color-black)"} >Não possui cadastro? <Link to={"/register"} ><Label>Cadastre-se</Label></Link> </Label>
                </div>
            </StyledMain>
            <Footer/>
        </>
    )
}