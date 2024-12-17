'use client'
import Image from 'next/image'
import React, { forwardRef, useState } from 'react'
import { Box, Input, Text } from 'theme-ui'
import eyeIcon from '@/../public/images/eyeball-open-view.svg'
import eyeClosedIcon from '@/../public/images/invisible-eye-icon.svg'
import { TextInputFieldProps } from '@/types/module/textInputField'

const TextInputField = forwardRef<HTMLInputElement, TextInputFieldProps>(
    (
        {
            placeholder,
            variant = 'primaryInput',
            validationVariant = '',
            name = '',
            type,
            disabled = false,
            autoFocus,
            requiredIconSx,
            Inputsx,
            onChange,
            onIconClick,
            onClick,
            onBlur,
            onKeyDown,
            onFocus,
            value,
            wrapperClass = '',
            showIcon,
            customClassName = '',
            errors,
            touched,
            description,
            maxLength,
            minLength,
            label,
            wrapperSx,
            manualErrorMessage,
            iconSrc,
            labelVariant = 'DMSans16MRegular125',
            wrapperVariant = '',
            labelClassName,
            autoComplete = 'off',
            firstInputBox = false,
            required,
            labelSx,
            iconWrapperClassName,
            iconWrapperSx,
            manualErrorSX,
            readOnly = false,
            isShowRequired = false,
            isEyeShow = true,
            id = '',
            inputWidth = '',
        },
        ref
    ) => {
        const [maskedField, setMaskedField] = useState(false)

        const handleIconClick = () => {
            setMaskedField(!maskedField)
        }

        const labelProps: { htmlFor: string } = {
            htmlFor: id,
        }

        return (
            <React.Fragment>
                <Box
                    className={wrapperClass}
                    variant={wrapperVariant}
                    mt={firstInputBox ? 0 : '14px'}
                    sx={{
                        ...wrapperSx,
                        position: 'relative',
                    }}
                >
                    {label && (
                        <Text
                            className={labelClassName}
                            as='label'
                            sx={{ mb: 10, ...labelSx }}
                            variant={labelVariant}
                            aria-labelledby={id}
                            {...labelProps}
                        >
                            {label}
                            {isShowRequired && (
                                <Text
                                    as="span"
                                    sx={{
                                        ...requiredIconSx,
                                        color: 'red',
                                        ml: '4px'
                                    }}
                                >
                                    *
                                </Text>
                            )}
                        </Text>
                    )}

                    <Input
                        id={id}
                        variant={variant}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        name={name}
                        ref={ref}
                        type={maskedField && type === 'password' ? 'text' : type}
                        disabled={disabled}
                        maxLength={maxLength}
                        minLength={minLength}
                        autoFocus={autoFocus}
                        className={`mx-0  ${inputWidth ? inputWidth : 'w-100'} font-noto-sans ${customClassName}`}
                        sx={Inputsx}
                        onChange={(e) => {
                            onChange && onChange(e?.target.value)
                        }}
                        onClick={onClick}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onKeyDown={onKeyDown}
                        value={value}
                        required={required}
                        readOnly={readOnly}
                    />
                    {errors && touched ? (
                        <Text sx={manualErrorSX} variant={validationVariant}>
                            {errors.toString()}
                        </Text>
                    ) : (
                        <Text sx={{ my: '5px', minHeight: '11px' }}>{description}</Text>
                    )}
                    {manualErrorMessage && (
                        <Text variant={validationVariant} sx={manualErrorSX}>
                            {manualErrorMessage.toString()}
                        </Text>
                    )}
                    {type === 'password' && isEyeShow && (
                        <Box
                            onClick={handleIconClick}
                            className={iconWrapperClassName}
                            sx={{
                                ...iconWrapperSx,
                                position: 'absolute',
                                right: '16px',
                                top: ['67px', '67px', '53px', '53px', '53px', '53px', '53px'],
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                            }}
                        >
                            <Image
                                height={23}
                                width={23}
                                alt="check-icon"
                                src={maskedField ? eyeIcon : eyeClosedIcon}
                            />
                        </Box>
                    )}
                    {showIcon && iconSrc && (
                        <Box
                            onClick={onIconClick}
                            className={iconWrapperClassName}
                            sx={iconWrapperSx}
                        >
                            <Image
                                height={20}
                                width={20}
                                className="primary-input-icon"
                                src={iconSrc}
                                alt={'icon'}
                            />
                        </Box>
                    )}
                </Box>
            </React.Fragment>
        )
    }
)

TextInputField.displayName = 'TextInputField'
export { TextInputField }



// const TextInputField = forwardRef<HTMLInputElement, TextInputFieldProps>(
//     (
//         {
//             placeholder,
//             variant = 'primaryInput',
//             validationVariant = 'Primary16Regular88',
//             name = '',
//             type,
//             disabled = false,
//             autoFocus,
//             Inputsx,
//             onChange,
//             onIconClick,
//             onClick,
//             onBlur,
//             onKeyDown,
//             onFocus,
//             value,
//             wrapperClass = '',
//             showIcon,
//             customClassName = '',
//             errors,
//             touched,
//             description,
//             maxLength,
//             minLength,
//             label,
//             wrapperSx,
//             manualErrorMessage,
//             iconSrc,
//             labelVariant = 'Secondary16Demi20',
//             wrapperVariant = '',
//             labelClassName,
//             autoComplete = 'off',
//             firstInputBox = false,
//             required,
//             labelSx,
//             iconWrapperClassName,
//             iconWrapperSx,
//             manualErrorSX,
//             readOnly = false,
//             isEyeShow = true,
//             id = '',
//             inputWidth = '',
//         },
//         ref
//     ) => {
//         const [maskedField, setMaskedField] = useState(false)

//         const handleIconClick = () => {
//             setMaskedField(!maskedField)
//         }

//         const labelProps: { htmlFor: string } = {
//             htmlFor: id,
//         }

//         return (
//             <React.Fragment>
//                 <Box
//                     className={wrapperClass}
//                     variant={wrapperVariant}
//                     mt={firstInputBox ? 0 : '14px'}
//                     sx={{
//                         ...wrapperSx,
//                         position: 'relative',
//                     }}
//                 >
//                     {label && (
//                         <Text
//                             className={labelClassName}
//                             as={'label'}
//                             sx={{ color: 'black', mb: 10, ...labelSx }}
//                             variant={labelVariant}
//                             aria-labelledby={id}
//                             {...labelProps}
//                         >
//                             {label}
//                         </Text>
//                     )}
//                     <Input
//                         id={id}
//                         variant={variant}
//                         placeholder={placeholder}
//                         autoComplete={autoComplete}
//                         name={name}
//                         ref={ref}
//                         type={maskedField && type === 'password' ? 'text' : type}
//                         disabled={disabled}
//                         maxLength={maxLength}
//                         minLength={minLength}
//                         autoFocus={autoFocus}
//                         className={`mx-0  ${inputWidth ? inputWidth : 'w-100'} font-noto-sans ${customClassName}`}
//                         sx={Inputsx}
//                         onChange={onChange}
//                         onClick={onClick}
//                         onFocus={onFocus}
//                         onBlur={onBlur}
//                         onKeyDown={onKeyDown}
//                         value={value}
//                         required={required}
//                         readOnly={readOnly}
//                     />
//                     {errors && touched ? (
//                         <Text sx={manualErrorSX} variant={validationVariant}>
//                             {errors.toString()}
//                         </Text>
//                     ) : (
//                         <Text sx={{ my: '5px', minHeight: '11px' }}>{description}</Text>
//                     )}
//                     {manualErrorMessage && (
//                         <Text variant={validationVariant} sx={manualErrorSX}>
//                             {manualErrorMessage.toString()}
//                         </Text>
//                     )}
//                     {type === 'password' && isEyeShow && (
//                         <Box
//                             onClick={handleIconClick}
//                             className={iconWrapperClassName}
//                             sx={{
//                                 ...iconWrapperSx,
//                                 position: 'absolute',
//                                 right: '30px',
//                                 top: ['67px', '67px', '60px', '62px', '64px', '69px', '67px'],
//                                 transform: 'translateY(-50%)',
//                                 cursor: 'pointer',
//                             }}
//                         >
//                             <Image
//                                 height={23}
//                                 width={23}
//                                 alt="check-icon"
//                                 src={maskedField ? eyeClosedIcon : eyeIcon}
//                             />
//                         </Box>
//                     )}
//                     {showIcon && iconSrc && (
//                         <Box
//                             onClick={onIconClick}
//                             className={iconWrapperClassName}
//                             sx={iconWrapperSx}
//                         >
//                             <Image
//                                 height={20}
//                                 width={20}
//                                 className="primary-input-icon"
//                                 src={iconSrc}
//                                 alt={'icon'}
//                             />
//                         </Box>
//                     )}
//                 </Box>
//             </React.Fragment>
//         )
//     }
// )