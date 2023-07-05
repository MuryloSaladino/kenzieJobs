import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Footer } from "../../components/Footer/index";

export function Register() {
    return(
        <>  
            <header>header</header>
            <main>
                <span>seta</span><Link to={"/login"}>voltar</Link>
                <section>
                    <RegisterForm />
                </section>
            </main>
            <Footer/>
        </>
    )
}