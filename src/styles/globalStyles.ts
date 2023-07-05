import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-black:#101119;
        --color-white:#FFFFFF;
        --color-Lightblue:#F9F9FF;
        --color-blue:#8490FF;
    }

    body{
        min-height: 100vh;
        padding: 90px 0 103px;
        position: relative;
        font-family: 'Montserrat', sans-serif;
    }
    @media(max-width: 580px) {
        padding: 119px 0 204px
    }
`