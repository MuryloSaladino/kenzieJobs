import { StyledFooter } from "./styles";

import icon from "../../assets/jobsIcon.svg"
import { Paragraph } from "../../styles/typography";

export function Footer() {
    return(
        <StyledFooter>
            <div>
                <img src={icon} alt="Logo" />
                <Paragraph color="var(--color-white)">Todos os direitos reservados - Kenzie Academy Brasil</Paragraph>
            </div>
        </StyledFooter>
    )
}