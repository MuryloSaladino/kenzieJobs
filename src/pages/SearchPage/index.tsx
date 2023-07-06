import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { MenuText, Paragraph, Title1, Title2, Label } from "../../styles/typography";
import { kenzieJobs } from "../../service/api";
import { StyledSearchPage, StyledMainContent, StyledSearchForm } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import axios from "axios";
import { Icon } from "../../components/Icon";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { ApplyForm } from "../../components/ModalApply";

interface IJob {
  userId: number;
  id: number;
  position: string;
  sallary: number;
  description: string;
}

interface IJobSearch {
  position?: string;
}

interface IFormdata {
  position?: string;
}

export function SearchPage() {
  const { openApplyModal, setCurrentJobToApply } = useContext(UserContext);
    
  const [jobs, setJobs] = useState<IJob[]>([])
  const [search, setSearch] = useState<IJobSearch>({})
  const [isSearchClicked, setIsSearchClicked] = useState(false)
  const {register, handleSubmit} = useForm() 

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await kenzieJobs.get<IJob[]>('/jobs', {
          params: {
            position_like: search.position
          }
        })
        setJobs(response.data)
        console.log(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data)
        }
        console.log("Internal error.", error)
      }
    }

    if (isSearchClicked) {
      getJobs()
    }
  }, [search, isSearchClicked])

  const submit = (formData:IFormdata) => {
    setSearch(formData)
    setIsSearchClicked(true)
  }

  const openJob = (job:IJob) => {
    openApplyModal()
    setCurrentJobToApply(job)
  }

  return (
    <StyledSearchPage>
      <Navbar></Navbar>
      <ApplyForm></ApplyForm>

      <StyledMainContent>
        <Title1 color={"var(--color-blue)"}>Busca de vagas</Title1>
        <MenuText>Digite o que você está procurando:</MenuText>
        <StyledSearchForm onSubmit={handleSubmit(submit)}>
          <Input type="text" placeholder="Pesquisar" {...register("position")} />
          <Button buttonStyle="solid" circle={true}><Icon iconName="search" color="var(--color-white)"></Icon></Button>
        </StyledSearchForm>
        {isSearchClicked ? <Label color={"black"}>Resultados de busca para: <Paragraph bold={true}>{search.position}</Paragraph></Label>
        : null}
        {isSearchClicked && (
          <ul>
            {jobs.length > 0 ? (
              jobs.map((job) => 
              <div>
                <li key={job.id}>
                  {job.position}
                  <button onClick={() => openJob(job)}>abrir job</button>
                </li>
              </div>) 
            ) : (
              <div>
                <Title2>Desculpe :(!</Title2>
                <Paragraph>Nenhum resultado encontrado</Paragraph>
              </div>
            )}
          </ul>
        )}
      </StyledMainContent>
      <Footer></Footer>
    </StyledSearchPage>
  )
}