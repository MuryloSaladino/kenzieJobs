import { createContext, useState, ReactNode } from "react";
import { kenzieJobs } from "../service/api";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

interface IProps {
    children: ReactNode;
}

export function UserProvider ({children}:IProps) {
    const navigate = useNavigate()

    const [user, setUser] = useState(null)

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

    async function registerUser (formData:IFormData) {
        try {
            const response:AxiosResponse<IRegisterUser> = await kenzieJobs.post("users", formData)
            console.log(response)
            navigate("login")
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
            navigate("dashboard")
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
        <UserContext.Provider value={{user, setUser, registerUser, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}