import { createContext, useState, useEffect, useRef } from "react";
import { kenzieJobs } from "../service/api";

interface IHomeContext {
    currentJobToApply: IJobs | null;
    setCurrentJobToApply: React.Dispatch<React.SetStateAction<IJobs | null>>;
    openApplyModal(): void;
    closeApplyModal(): void;
    modalRef: React.RefObject<HTMLDialogElement>;
    allJobs: IJobs[];
    allCompanies: ICompanies[];
}
interface IHomeProviderProps {
    children: React.ReactNode;
}
interface IJobs{
    userId: number;
    id: number;
    position: string;
    sallary: number;
    description: string;
}
interface ICompanies{
    email: string;
    password: string;
    name: string;
    id: number;
}

export const HomeContext = createContext({} as IHomeContext);

export function HomeProvider ({children}:IHomeProviderProps) {

    const [currentJobToApply, setCurrentJobToApply] = useState<IJobs | null>(null);
    const [allJobs, setAllJobs] = useState<IJobs[]>([])
    const [allCompanies, setAllCompanies] = useState<ICompanies[]>([])
    const modalRef = useRef<HTMLDialogElement>(null)

    function openApplyModal() {
        modalRef.current?.showModal()
    }
    function closeApplyModal() {
        modalRef.current?.close()
        setCurrentJobToApply(null)
    }

    useEffect(() => {
        async function getAllJobs() {
            try {
                const {data} = await kenzieJobs.get('/jobs')
                setAllJobs(data)
            } catch (error) {
                console.error(error)
            }
        }
        async function getAllCompanies() {
            try {
              const {data} = await kenzieJobs.get('/users')
              setAllCompanies(data)
            } catch (error) {
              console.error(error)
            }
          }
        getAllJobs()
        getAllCompanies()
    }, [])

    return (
        <HomeContext.Provider value={{
            currentJobToApply,
            setCurrentJobToApply,
            openApplyModal,
            closeApplyModal,
            modalRef,
            allJobs,
            allCompanies
        }}>
            {children}
        </HomeContext.Provider>
    )
}