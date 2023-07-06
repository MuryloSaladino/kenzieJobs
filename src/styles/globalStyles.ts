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
        padding: 100px 0 120px;
        position: relative;
        font-family: "Montserrat", sans-serif;
    }
    @media(max-width: 580px) {
        body{
            padding: 130px 0 220px
        }
    }
`