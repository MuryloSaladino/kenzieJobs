import { StyledIcon } from "./styles";

interface IIconProps{
    iconName: string;
    color?: string;
}

export function Icon({iconName, color}: IIconProps) {
    return(
        <StyledIcon color={color ? color : "var(--color-white)"} className="material-icons">{iconName}</StyledIcon>
    )
}