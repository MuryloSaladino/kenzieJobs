import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Footer } from "../../components/Footer/index";
import { Navbar } from "../../components/Navbar/index";
import { StyledMain } from "./styles";
import { Paragraph } from "../../styles/typography";
import { Icon } from "../../components/Icon";

export function Register() {
    return(
        <>  
            <Navbar/>
            <StyledMain>
                <div>
                    <Icon iconName="arrow_back" color="var(--color-blue)"></Icon><Link to={"/login"}><Paragraph bold color={"var(--color-blue)" }>voltar</Paragraph></Link>
                </div>
                <section>
                    <RegisterForm />
                </section>
            </StyledMain>
            <Footer/>
        </>
    )
}