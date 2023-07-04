import { Link } from "react-router-dom";
import { MenuText } from "../../styles/typography";
import { useEffect, useState } from "react";
import { StyledDashboardNavbarDiv } from "./styles";

export function DashboardNavbar() {

    const [pageSelected, setPageSelected] = useState<"applies" | "jobs" | null>(null)

    useEffect(() => {
        function checkLocation() {
            const url = window.location.href
            if(url.includes("applies")) {
                setPageSelected("applies")
            }else if(url.includes("jobs")){
                setPageSelected("jobs")
            }
        }
        checkLocation()
    }, [])

    return(
        <>
            <StyledDashboardNavbarDiv>
                <Link to="/dashboard/applies">
                    <MenuText color={pageSelected === "applies" ? "var(--color-blue)" : "var(--color-black)"}>Minhas candidaturas</MenuText>
                </Link>

                <Link to="/dashboard/jobs">
                    <MenuText color={pageSelected === "jobs" ? "var(--color-blue)" : "var(--color-black)"}>Minhas vagas</MenuText>
                </Link>
            </StyledDashboardNavbarDiv>
        </>
    )
}