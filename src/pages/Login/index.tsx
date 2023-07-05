import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import { Footer } from "../../components/Footer/index";
import { Navbar } from "../../components/Navbar/index";
import { StyledMain, StyledSpan } from "./styles";
import loginImage from "../../assets/loginImage.svg";
import { Label, Paragraph } from "../../styles/typography";

export function Login() {

    return(
        <>
            <Navbar/>
            <StyledMain>
                <img src={loginImage}/>
                <div>
                    <LoginForm/>
                    <Paragraph>Não possui cadastro?<Label><Link to={"/register"} >Cadastre-se</Link></Label> </Paragraph>
                </div>
            </StyledMain>
            <Footer/>
        </>
    )
}