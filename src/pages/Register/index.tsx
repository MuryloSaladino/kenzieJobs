import { StyledMain } from "./styles";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Navbar } from "../../components/Navbar/index";
import { Footer } from "../../components/Footer/index";
import { Icon } from "../../components/Icon";
import { Paragraph } from "../../styles/typography";

import { Link } from "react-router-dom";

export function Register() {
    return(
        <>  
            <Navbar/>
            <StyledMain>
                <div>
                    <Link to="/login">
                        <Icon iconName="arrow_back" color="var(--color-blue)"/>
                        <Paragraph bold color="var(--color-blue)">voltar</Paragraph>
                    </Link>
                </div>
                <section>
                    <RegisterForm/>
                </section>
            </StyledMain>
            <Footer/>
        </>
    )
}