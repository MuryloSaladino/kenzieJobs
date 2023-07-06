import { StyledSearchDiv, StyledSearchPageMain, StyledSearchUl } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { BoldAlert, MenuText, Paragraph, Title1, Title2 } from "../../styles/typography";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { ModalApply } from "../../components/ModalApply";

import { useState } from "react";
import { useContext } from "react";
import { HomeContext } from "../../providers/HomeContext";
import { HomeJobCard } from "../../components/HomeJobCard";
import { v4 as uuidv4 } from "uuid";

interface IJob {
  userId: number;
  id: number;
  position: string;
  sallary: number;
  description: string;
}

export function SearchPage() {

    const { allJobs } = useContext(HomeContext);
    const [filteredJobs, setFilteredJobs] = useState<IJob[]>([]);
    const [search, setSearch] = useState<string>("");
    const [lastSearch, setLastSearch] = useState<string>("");

    function filterJobs() {
        if(search.length > 0) {
            setFilteredJobs(
                allJobs.filter(
                    job => job.position.toLowerCase().includes(search.toLowerCase()) 
                        || job.position.toLowerCase().includes(search.toLowerCase())
                )
            )
            setLastSearch(search);
        } else{
            setFilteredJobs([]);
            setLastSearch("");
        }
    }

    return (
    <>
        <ModalApply/>
        <Navbar/>
        <StyledSearchPageMain searching={filteredJobs.length > 0 ? true : false}>
            <Title1 color="var(--color-blue)">Busca de vagas</Title1>
            <StyledSearchDiv>
                <MenuText>Digite o que você está procurando:</MenuText>
                <form onSubmit={(e) => {e.preventDefault(); filterJobs()}}>
                    <Input placeholder="Pesquisa" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <Button buttonStyle="solid" circle={true}><Icon iconName="search"/></Button>
                </form>
                {lastSearch.length > 0 ? <Paragraph>Exibindo resultados de busca para: <BoldAlert>{lastSearch}</BoldAlert></Paragraph> : null}
            </StyledSearchDiv>
            <StyledSearchUl>
                {filteredJobs.map(job => <HomeJobCard job={job} key={uuidv4()}/>)}
                {
                    filteredJobs.length == 0 && lastSearch.length > 0 ?
                    <>
                        <Title2>Desculpe :(!</Title2>
                        <Paragraph>Nenhun resultado encontrado</Paragraph>
                    </> 
                    : null
                }
            </StyledSearchUl>
        </StyledSearchPageMain>
        <Footer/>
    </>
    )
}