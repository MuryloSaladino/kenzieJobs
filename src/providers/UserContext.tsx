import { createContext, useState, ReactNode, useEffect } from "react";
import { kenzieJobs } from "../service/api";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";


interface IUserContext {
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
    registerUser(formData: IFormData): Promise<void>;
    loginUser(formData: IFormData): Promise<void>;
    logoutUser(): Promise<void>;
}

interface IUserProviderProps {
    children: React.ReactNode;
};

interface IUser {
    email:string;
    name:string;
    id:string;
}

interface IFormData {
    email: string,
    password: string,
    name?: string,
    id?:string
}

interface IResponse {
    accessToken: string,
    user: IUser
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider ({children}:IUserProviderProps) {
    const navigate = useNavigate()

    const [user, setUser] = useState<IUser | null>(null)

    async function registerUser (formData:IFormData) {
        try {
            const {data}:AxiosResponse<IResponse> = await kenzieJobs.post("users", formData)
            console.log(data)
            navigate("/login")
        } catch (error) {
            console.error(error)
        }
    }

    async function loginUser (formData:IFormData) {
        try {
            const response:AxiosResponse<IResponse> = await kenzieJobs.post("login", formData)
            console.log(response)
            const { accessToken, user } = response.data
            localStorage.setItem('@TOKEN', accessToken)
            localStorage.setItem('@USERID',  user.id ? user.id : '')
            setUser(user)
            navigate("/dashboard")
        } catch (error) {
            console.error(error)
        }
    }

    console.log(user)

    async function logoutUser() {
        localStorage.removeItem("TOKEN")
        localStorage.removeItem("USERID")
        setUser(null)
        navigate("/")
    }

    useEffect(()=>{
        const userId = localStorage.getItem("@USERID")
        const userToken = localStorage.getItem("@TOKEN")
        
        const userLoad = async () => {
            try {
                const {data} =  await kenzieJobs.get(`users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                })
                console.log(data)
                const newData = {
                    name:data.name,
                    email:data.email,
                    id:data.id,
                }
                setUser(newData)
                navigate("/dashboard")
            } catch (error) {
                console.error(error)
                localStorage.removeItem("@TOKEN")
                localStorage.removeItem("@USERID")
            }
        }
        userToken ? userLoad() : null
    },[])

    return (
        <UserContext.Provider value={{user, setUser, registerUser, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    )
}