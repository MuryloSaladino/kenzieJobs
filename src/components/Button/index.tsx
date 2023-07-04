import { StyledButton } from "./styles";

interface IButtonProps{
    children: React.ReactNode
    buttonStyle: 'solid' | 'outline';
    handleClick: () => void;
}

export function Button({children, buttonStyle, handleClick}: IButtonProps) {
    return(
        <StyledButton buttonStyle={buttonStyle} onClick={handleClick} >
            {children}
        </StyledButton>
    )
}