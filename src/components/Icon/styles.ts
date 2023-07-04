import styled from "styled-components";

interface StyledIconProps{
    color: string;
}

export const StyledIcon = styled.i<StyledIconProps>`
    color: ${({color}) => color};
    transition: 0.3s;
`