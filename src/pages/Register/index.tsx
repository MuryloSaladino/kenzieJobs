import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Footer } from "../../components/Footer/index";
import { Navbar } from "../../components/Navbar/index";

export function Register() {
    return(
        <>  
            <Navbar/>
            <main>
                <span>seta</span><Link to={"login"}>voltar</Link>
                <section>
                    <RegisterForm />
                </section>
            </main>
            <Footer/>
        </>
    )
}