import { createContext, useState, ReactNode } from "react";
import { kenzieJobs } from "../service/api";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

export const UserContext = createContext({});

interface IUserProviderProps {
    children: ReactNode;
}

export function UserProvider ({children}:IUserProviderProps) {

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
    
    interface IFormData {
        email: string,
        password: string,
        name?: string,
        id?:string
    }
    
    interface IRegisterUser {
        accessToken:string,
        user:IFormData
    }
    

    const [user, setUser] = useState(null)
    const [jobs, setJobs] = useState<IJobs[]>([])
    const [applies, setApplies] = useState<IApplies[]>([])
    const navigate = useNavigate()


    async function updateJobs(companyId:string, successMessage:string) {
        const token = localStorage.getItem("@TOKEN")
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const {data}:AxiosResponse<IJobs[]> = await kenzieJobs.get(`users/${companyId}/jobs`, options)
            setJobs(data)
            if(successMessage){toast.success(successMessage)}
        } catch (error) {
            console.error(error)
            toast.error("Oops! Parece que algo deu errado.")
        }
    }

    async function updateApplies(companyId:string, successMessage:string) {
        try {
            const {data}:AxiosResponse<IApplies[]> = await kenzieJobs.get(`users/${companyId}/jobs`)
            setApplies(data)
            if(successMessage){toast.success(successMessage)}
        } catch (error) {
            console.error(error)
            toast.error("Oops! Parece que algo deu errado.")
        }
    }

    async function registerUser (formData:IFormData) {
        try {
            const response:AxiosResponse<IRegisterUser> = await kenzieJobs.post("users", formData)
            console.log(response)
            navigate("/login")
        } catch (error) {
            console.error(error)
        }
    }

    async function loginUser (formData:IFormData) {
        try {
            const response:AxiosResponse<IRegisterUser> = await kenzieJobs.post("login", formData)
            console.log(response)
            const { accessToken, user } = response.data
            localStorage.setItem('@TOKEN', accessToken)
            localStorage.setItem('@USERID',  user.id ? user.id : '')
            navigate("/dashboard")
        } catch (error) {
            console.error(error)
        }
    }

    async function logoutUser() {
        localStorage.removeItem("TOKEN")
        localStorage.removeItem("USERID")
        setUser(null)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{user, setUser, registerUser, loginUser, logoutUser, jobs, applies, updateJobs, updateApplies}}>
            {children}
        </UserContext.Provider>
    )
}