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
        position: relative;
        font-family: 'Montserrat', sans-serif;
    }
`