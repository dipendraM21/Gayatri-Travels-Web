import { MouseEvent, Ref } from "react"
import { ThemeUIStyleObject } from "theme-ui"

export interface ButtonProps {
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void
    toggleFavorite?: () => void
    toggleOnClick?: () => void
    text?: string
    textVariant?: string
    sx?: ThemeUIStyleObject
    textSx?: ThemeUIStyleObject
    multilineTextSx?: ThemeUIStyleObject
    variant?: string
    icon?: string
    iconClassName?: string
    iconRight?: string
    isIconOnly?: string
    iconStyles?: React.CSSProperties
    disabled?: boolean
    selected?: boolean
    type?: 'button' | 'submit' | 'reset'
    className?: string
    children?: React.ReactNode
    isFavoriteIcon?: boolean
    isFavorite?: boolean
    multilineText?: string[]
    quantity?: number
    isSquareButton?: boolean
    isUpArrow?: boolean
    isDownArrow?: boolean
    ref?: Ref<HTMLButtonElement>
    autoFocus?: boolean
    accessKey?: string
}