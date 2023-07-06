import { Navbar } from "../../components/Navbar";
import image from "../../assets/Rectangle 3.png"
import { AboutH2, AboutJobsDiv, AboutUs, H2Slogan, SectionVacancies, SloganDiv } from "./styles";

export function Home() {
    
    return(
        <>
            <Navbar/>
            <section>
            <SloganDiv>
                <H2Slogan>Trabalho é na Jobs</H2Slogan>
            </SloganDiv>
            <AboutJobsDiv>
                <AboutH2>Sobre a Jobs</AboutH2>
                <AboutUs>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, optio voluptate! Itaque fugit accusamus iure reiciendis quasi, odio molestiae eaque, nisi nihil et minus a voluptates. Dicta unde incidunt ratione.</AboutUs>
                <figure>
                    <img src={image} alt="Imagem ilustrativa" style={{width: "100%"}}/>
                </figure>
            </AboutJobsDiv>
            </section>
            <SectionVacancies>
                <AboutH2>Confira nossas vagas</AboutH2>
            </SectionVacancies>
        </>
    )
}