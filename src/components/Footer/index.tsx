import { StyledFooter } from "./styles";

import logo from "../../assets/jobsIcon.svg"
import { Paragraph } from "../../styles/typography";
import { Link } from "react-router-dom";

export function Footer() {
    return(
        <StyledFooter>
            <div>
                <Link to="/"><img src={logo} alt="Logo"/></Link>
                <Paragraph color="var(--color-white)">Todos os direitos reservados - Kenzie Academy Brasil</Paragraph>
            </div>
        </StyledFooter>
    )
}