import styled from "styled-components";

interface StyledIconProps{
    color: string;
}

export const StyledIcon = styled.i<StyledIconProps>`
    color: ${({color}) => color};
    font-size: 1.5rem;
`