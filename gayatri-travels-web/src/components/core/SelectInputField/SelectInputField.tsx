'use client'
import { SelectInputFieldProps } from '@/types/module/selectInputFieldModule'
import {
    GroupType,
    OptionType,
    isMultiple,
    stylesConfig,
} from '@/utils/stylesConfig'
import Image from 'next/image'
import React, { useRef } from 'react'
import Selects, { DropdownIndicatorProps, components } from 'react-select'
import { Box, Text } from 'theme-ui'

export const SelectInputField: React.FC<SelectInputFieldProps> = ({
    wrapperClass,
    wrapperSx,
    isDisabled = false,
    customClassName = '',
    value,
    defaultValue,
    options,
    placeholder,
    onChange,
    onBlur,
    isSearchable = false,
    isLoading = false,
    touched = false,
    errors = '',
    description,
    label,
    stylesConfigs = stylesConfig,
    classNames,
    indicatorIconClassName = 'primary-selection',
    name,
    firstInputBox = false,
    labelVariant = 'Secondary16Demi20',
    labelSx,
    errorsSx,
    inputId,
    instanceId,
    variant,
}) => {
    const currentValueRef = useRef(value)

    const DropdownIndicator = (
        props: DropdownIndicatorProps<OptionType, typeof isMultiple, GroupType>
    ) => {
        return (
            <components.DropdownIndicator {...props}>
                <Image
                    className={indicatorIconClassName}
                    src={'/images/select.svg'}
                    alt="select"
                    width={15}
                    height={15}
                />
            </components.DropdownIndicator>
        )
    }

    return (
        <Box
            variant={variant}
            className={wrapperClass}
            mt={firstInputBox ? 'auto' : 14}
            sx={wrapperSx}
        >
            {label && (
                <Text
                    sx={{ color: 'black', mb: 10, ...labelSx }}
                    as="label"
                    variant={labelVariant}
                >
                    {label}
                </Text>
            )}
            <Selects
                isDisabled={isDisabled}
                defaultValue={
                    defaultValue
                        ? typeof value === 'string'
                            ? { value: value, label: value }
                            : { value: value?.label, label: value?.label }
                        : undefined
                }
                className={customClassName}
                placeholder={placeholder}
                name={name}
                onBlur={(e) => {
                    if (onBlur) {
                        onBlur(e, currentValueRef?.current)
                    }
                }}
                components={{ DropdownIndicator }}
                value={
                    value
                        ? typeof value === 'string'
                            ? { value: value, label: value }
                            : { value: value?.value, label: value?.label }
                        : null
                }
                onChange={(selectedOption) => {
                    onChange({
                        value: selectedOption?.value,
                        label: selectedOption?.label,
                    })
                    if (selectedOption?.value) {
                        currentValueRef.current = selectedOption?.value
                    }
                }}
                options={
                    options.map((option) => {
                        if (typeof option === 'string') {
                            return { value: option, label: option }
                        } else {
                            return { value: option.value, label: option.label }
                        }
                    }) || []
                }
                isSearchable={isSearchable}
                isLoading={isLoading}
                classNames={classNames}
                styles={stylesConfigs}
                inputId={inputId}
                instanceId={instanceId}
                onInputChange={(inputValue, { action }) => {
                    if (action === 'input-change') {
                        onChange({ value: inputValue, label: inputValue })
                        currentValueRef.current = inputValue
                    }
                }}
                menuPlacement="auto"
            />
            {errors && touched ? (
                <Text
                    className="text-danger"
                    sx={{ my: '5px', minHeight: '11px', lineHeight: '10px', ...errorsSx }}
                >
                    {errors.toString()}
                </Text>
            ) : (
                <Text sx={{ my: '5px', minHeight: '11px' }}>{description}</Text>
            )}
        </Box>
    )
}
