import { StyledIcon } from "./styles";

interface IIconProps{
    iconName: string;
    color?: string;
    handleClick?: () => void;
}

export function Icon({iconName, color, handleClick}: IIconProps) {
    return(
        <StyledIcon
            color={color ? color : "var(--color-white)"}
            className="material-icons"
            onClick={handleClick}
        >
            {iconName}
        </StyledIcon>
    )
}