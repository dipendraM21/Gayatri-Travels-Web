'use client'
import favoriteStarFilled from '@/../public/images/favorite-star-solid.svg'
import favoriteStar from '@/../public/images/favorite-star.svg'
import { ButtonProps } from '@/types/module/themuiModule'
import Image from 'next/image'
import { CSSProperties, forwardRef, MouseEvent, useRef } from 'react'
import { Box, Button, Text } from 'theme-ui'

const defaultButtonTextStyle: CSSProperties = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}

const squareButtonTextStyle: CSSProperties = {
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    wordBreak: 'break-word',
    hyphens: 'auto',
}

const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text

    const truncated = text.slice(0, maxLength - 1)
    const lastSpaceIndex = truncated.lastIndexOf(' ')

    if (lastSpaceIndex > 0) {
        return truncated.slice(0, lastSpaceIndex) + '...'
    }

    return truncated + '...'
}

export const ThemeButton = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            text,
            icon,
            iconRight,
            textVariant,
            isIconOnly,
            onBlur = () => null,
            onClick = () => null,
            toggleFavorite = () => null,
            toggleOnClick = () => null,
            sx,
            disabled = false,
            variant = 'primary',
            type,
            className,
            textSx,
            multilineTextSx,
            children,
            isFavoriteIcon = false,
            iconStyles,
            isFavorite = false,
            iconClassName,
            multilineText,
            quantity = 0,
            isSquareButton = false,
            isUpArrow = false,
            isDownArrow = false,
            autoFocus = false,
            accessKey = '',
        },
        ref // eslint-disable-line @typescript-eslint/no-unused-vars
    ) => {
        const baseTextStyle = isSquareButton
            ? squareButtonTextStyle
            : defaultButtonTextStyle
        const maxTextLength = 50

        const buttonRef = useRef<HTMLButtonElement>(null)

        const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
            if (buttonRef.current && variant === 'iconOnlyBtn') {
                buttonRef.current.blur()
            }
            if (onClick) {
                onClick(event)
            }
        }

        return (
            <Button
                autoFocus={autoFocus}
                type={type}
                onClick={handleClick}
                sx={{ position: 'relative', ...sx }}
                variant={variant}
                disabled={disabled}
                className={className}
                onBlur={onBlur}
                accessKey={accessKey}
                ref={buttonRef}
            >
                {isFavoriteIcon && (
                    <Image
                        height={18}
                        width={18}
                        style={{ position: 'absolute', top: 7, right: 7 }}
                        alt="favorite"
                        src={isFavorite ? favoriteStarFilled : favoriteStar}
                        onClick={toggleFavorite}
                    />
                )}
                {icon && (
                    <Image
                        height={20}
                        className={iconClassName}
                        width={20}
                        style={{ marginRight: isIconOnly ? 0 : 6, ...iconStyles }}
                        src={icon}
                        alt="Icon"
                        onClick={toggleOnClick}
                    />
                )}
                {text ? (
                    <Text
                        variant={textVariant}
                        sx={{
                            ...baseTextStyle,
                            ...textSx,
                        }}
                    >
                        {truncateText(text, maxTextLength)}
                    </Text>
                ) : null}
                {multilineText ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            ...multilineTextSx,
                        }}
                    >
                        {multilineText.map((text, index) => (
                            <Text
                                variant={textVariant}
                                sx={{
                                    ...baseTextStyle,
                                    ...textSx,
                                }}
                                key={`${text}-${index}`}
                            >
                                {text}
                            </Text>
                        ))}
                    </Box>
                ) : null}
                {children}
                {iconRight && (
                    <Image
                        height={20}
                        width={20}
                        style={{ marginLeft: 6 }}
                        src={iconRight}
                        alt="Icon"
                    />
                )}
                {quantity > 0 && <Box className="quantity-counter">{quantity}</Box>}
                {isDownArrow && (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.42871 11.4285L10.0001 18.5713L18.5716 11.4285"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 18.5715V2.85718"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
                {isUpArrow && (
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.42871 8.57153L10.0001 1.42868L18.5716 8.57153"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 18.5715V2.85718"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </Button>
        )
    }
)

ThemeButton.displayName = 'ThemeButton'
