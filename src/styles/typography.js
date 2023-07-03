import styled from "styled-components";

export const Title1 = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: ${({color}) => color ? color : "var(--color-black)"};
`

export const Title2 = styled.h2`
    font-size: 2.75rem;
    font-weight: 700;
    color: ${({color}) => color ? color : "var(--color-black)"};
`

export const Title3 = styled.h3`
    font-size: 1.3125rem;
    font-weight: 700;
    color: ${({color}) => color ? color : "var(--color-black)"};
`

export const BoldAlert = styled.strong`
    font-size: 1rem;
    font-weight: 700;
    color: ${({color}) => color ? color : "var(--color-black)"};
`

export const MenuText = styled.b`
    font-size: 1rem;
    font-weight: 700;
    color: ${({color}) => color ? color : "var(--color-black)"};
`

export const Label = styled.label`
    font-size: 1.0625rem;
    font-weight: 400;
    color: ${({color}) => color ? color : "var(--color-blue)"};
`

export const Paragraph = styled.p`
    font-size: 1.125rem;
    font-weight: ${({bold}) => bold ? '700' : '400'};
    color: ${({color}) => color ? color : "var(--color-black)"};
`