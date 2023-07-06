import { StyledHeader, StyledNav } from "./styles";
import { MenuText } from "../../styles/typography";
import { Button } from "../Button";
import { Icon } from "../Icon";
import logo from "../../assets/jobsIcon.svg"

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../providers/UserContext";

export function Navbar() {

    const [menuColor, setMenuColor] = useState<string>("var(--color-black)");
    const { user, logoutUser } = useContext(UserContext);

    useEffect(() => {
        function checkLocation() {
            const url = window.location.href;
            if(url.includes("login") || url.includes("register")) {
                setMenuColor("var(--color-blue)")
            }
        }
        checkLocation();
    }, [])

    function getInicials(string: string) {
        if(string.includes(" ")){
            return string.split(" ").map(word => word[0]).toString().replace(",", "").toUpperCase();
        }
        return string.substring(0, 2).toUpperCase();
    }

    return(
        <StyledHeader>
            <StyledNav user={user?true:false}>

                <Link to="/"><img src={logo} alt="Logo"/></Link>

                {
                    user?
                    <>
                        <div>
                            <Link to="/dashboard"><Button circle={true} buttonStyle="solid">{getInicials(user.name)}</Button></Link>
                            <Button handleClick={logoutUser} buttonStyle="outline">Sair</Button>
                        </div>
                    </> 
                    :
                    <>
                        <Link to="/login"><MenuText color={menuColor}>acesso empresa</MenuText></Link>
                        <Link to="/search-jobs"><Button buttonStyle="solid">Confira nossas vagas</Button></Link>
                        <Link to="/search-jobs" >
                            <Icon iconName="search" color="var(--color-blue)"/>
                        </Link>
                    </>
                }

                

            </StyledNav>
        </StyledHeader>
    )
}