import { StyledButton } from "./styles";

interface IButtonProps{
    children: React.ReactNode
    buttonStyle: 'solid' | 'outline';
    handleClick?: () => void;
    circle?: boolean;
}

export function Button({children, buttonStyle, handleClick, circle}: IButtonProps) {
    return(
        <StyledButton buttonStyle={buttonStyle} onClick={handleClick} circle={circle} >
            {children}
        </StyledButton>
    )
}