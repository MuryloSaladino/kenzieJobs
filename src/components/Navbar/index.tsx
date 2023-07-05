import { StyledHeader, StyledNav } from "./styles";
import { useEffect, useState } from "react"

import logo from "../../assets/jobsIcon.svg"
import { MenuText } from "../../styles/typography";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Icon } from "../Icon";

export function Navbar() {

    const [menuColor, setMenuColor] = useState<string>("var(--color-black)")

    useEffect(() => {
        function checkLocation() {
            const url = window.location.href
            if(url.includes("login") || url.includes("register")) {
                setMenuColor("var(--color-blue)")
            }
        }
        checkLocation()
    }, [])

    return(
        <StyledHeader>
            <StyledNav>

                <img src={logo} alt="Logo" />

                <Link to="/login"><MenuText color={menuColor}>acesso empresa</MenuText></Link>
                <Link to="/search-jobs"><Button buttonStyle="solid">Confira nossas vagas</Button></Link>
                <Link to="/search-jobs" >
                    <Icon iconName="search" color="var(--color-blue)"/>
                </Link>

            </StyledNav>
        </StyledHeader>
    )
}