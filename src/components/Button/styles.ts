import styled from "styled-components";

interface IStyledButtonProps{
    buttonStyle: "solid" | "outline";
    circle?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
    width: ${({circle}) => circle ? "58px" : "max-content"};
    height: 58px;

    background-color: ${({buttonStyle}) => buttonStyle === "outline" ? "transparent" : "var(--color-blue)"};
    padding: ${({circle}) => circle ? "null" : "18px 36px"};
    border: solid 1px var(--color-blue);
    border-radius: 255px;

    font-size: 1.0625rem;
    font-weight: 700;
    color: ${({buttonStyle}) => buttonStyle === "outline" ? "var(--color-blue)" : "var(--color-white)"};

    transition: 0.3s;
    cursor: pointer;

    :hover{
        background-color: var(--color-Lightblue);
        ${({buttonStyle}) => buttonStyle === "solid" ? "color: var(--color-blue);" : null};

        i{
            ${({buttonStyle}) => buttonStyle === "solid" ? "color: var(--color-blue);" : null};
        }
    }
`