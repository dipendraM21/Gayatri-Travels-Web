import { GroupType, OptionType, isMultiple } from '@/utils/stylesConfig'
import { FormikErrors, FormikTouched } from 'formik'
import { ClassNamesConfig, StylesConfig } from 'react-select'
import { Theme, ThemeUIStyleObject } from 'theme-ui'

export interface SelectInputFieldProps {
    indicatorIconClassName?: string
    wrapperClass?: string
    wrapperSx?: ThemeUIStyleObject<Theme<{}>>
    variant?: string
    labelSx?: ThemeUIStyleObject<Theme<{}>>
    errorsSx?: ThemeUIStyleObject<Theme<{}>>
    classNames?:
    | ClassNamesConfig<
        {
            value: string
            label: string
        },
        false,
        GroupType
    >
    | undefined
    isDisabled?: boolean
    customClassName?: string
    value: string | { value: string; label: string }
    defaultValue?: string
    placeholder?: string
    description?: string
    labelVariant?: string
    label?: string
    name?: string
    options: Array<{ value: any; label: string } | string>
    onChange: (e: { value?: string | boolean; label?: string }) => void
    isSearchable?: boolean
    firstInputBox?: boolean
    isLoading?: boolean
    iconSx?: ThemeUIStyleObject
    touched?: boolean | FormikTouched<any> | FormikTouched<any>[]
    errors?: string | string[] | FormikErrors<any> | FormikErrors<any>[]

    stylesConfigs?: StylesConfig<OptionType, typeof isMultiple, GroupType>
    onBlur?: (
        e: React.FocusEvent<HTMLInputElement, Element>,
        value: string | { value: string | boolean; label: string }
    ) => void
    readOnly?: boolean
    inputId?: string
    instanceId?: string
}
