import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StyledHomeUl, StyledSection1, StyledSection2, StyledSection3 } from "./styles";
import { Paragraph, Title1 } from "../../styles/typography";
import homeImage from "../../assets/homePhoto.svg";
import { useContext } from "react";
import { HomeContext } from "../../providers/HomeContext";
import { HomeJobCard } from "../../components/HomeJobCard";
import { v4 as uuidv4 } from "uuid";
import { ModalApply } from "../../components/ModalApply";

export function Home() {

    const {allJobs} = useContext(HomeContext)
    
    return(
        <>
            <ModalApply/>
            <Navbar/>
            <StyledSection1>
                <div>
                    <Title1 color="var(--color-white)">Trabalho é na jobs</Title1>
                </div>
            </StyledSection1>
            <StyledSection2>
                <div>
                    <Title1 color="var(--color-blue)">Sobre a jobs</Title1>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis orci nec felis varius pretium. Nam eu diam erat. Sed libero ante, finibus id nunc suscipit, sagittis sagittis sem. Nam accumsan, turpis sed consequat tincidunt, nibh odio tincidunt nunc, aliquet sodales sem tortor sed lectus.
                    </Paragraph>
                </div>
                <img src={homeImage}/>
            </StyledSection2>
            <StyledSection3>
                <Title1 color="var(--color-blue)">Confira nossa vagas</Title1>
                <StyledHomeUl>
                    {allJobs.map(job => <HomeJobCard job={job} key={uuidv4()}/>)}
                </StyledHomeUl>
            </StyledSection3>
            <Footer/>
        </>
    )
}