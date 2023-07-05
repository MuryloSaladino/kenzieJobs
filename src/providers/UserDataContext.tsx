import { createContext, useEffect, useState } from "react";
import { kenzieJobs } from "../service/api";
import { toast } from "react-toastify"
import { AxiosResponse } from "axios";


interface IUserDataProviderProps{
    children: React.ReactNode
}

interface IJobs{
    userId: number,
    id: number,
    position: string,
    sallary: number,
    description: string
}

interface IApplies{
    id: number,
    jobId: number,
    userId: number,
    name: string,
    email: string,
    linkedin: string
}

interface IUserDataProvider{
    jobs: IJobs[];
    applies: IApplies[];
    updateJobs: () => Promise<void>;
    updateApplies: () => Promise<void>;
    currentJob: IJobs | null;
    setCurrentJob: React.Dispatch<React.SetStateAction<IJobs | null>>
}


export const UserDataContext = createContext({} as IUserDataProvider)

export function UserDataProvider({children}: IUserDataProviderProps) {

    const [jobs, setJobs] = useState<IJobs[]>([])
    const [applies, setApplies] = useState<IApplies[]>([])
    const [currentJob, setCurrentJob] = useState<IJobs | null>(null)


    async function updateJobs() {
        const token = localStorage.getItem("@TOKEN")
        const companyId = localStorage.getItem("@USERID")
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const {data}:AxiosResponse<IJobs[]> = await kenzieJobs.get(`/users/${companyId}/jobs`, options)
            setJobs(data)
        } catch (error) {
            console.error(error)
            toast.error("Oops! Parece que algo deu errado.")
        }
    }

    async function updateApplies() {
        const token = localStorage.getItem("@TOKEN")
        const companyId = localStorage.getItem("@USERID")
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const {data}:AxiosResponse<IApplies[]> = await kenzieJobs.get(`/users/${companyId}/applications`, options)
            setApplies(data)
        } catch (error) {
            console.error(error)
            toast.error("Oops! Parece que algo deu errado.")
        }
    }


    useEffect(() => {
        updateJobs()
        updateApplies()
    }, [])


    return(
        <UserDataContext.Provider value={{jobs, applies, updateJobs, updateApplies, currentJob, setCurrentJob}}>
            {children}
        </UserDataContext.Provider>
    )
}