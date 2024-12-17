'use client'
import { translation } from "@/utils/translation"
import { Box, Paragraph, Text } from "theme-ui"
import { TextInputField } from "../core/TextInputField/TextInputField"
import { ThemeButton } from "../core/Button/Button"
import flightBook from "@/../public/images/flight-book-banner.svg"
import Image from "next/image"

export const SignInComponent = () => {
    return (
        <Box as='div' className="min-h-screen bg-[#f2f2f2] flex items-center justify-center">
            <Box as='div' className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">

                <Box as='div' className="md:block bg-gray-100 flex items-center justify-center border-r border-gray-300">
                    <Image
                        src={flightBook}
                        alt="flightBook"
                    />
                </Box>

                <Box as='div' className="p-8 md:p-[50px]">
                    <Text variant="Primary36SemiBold125" className="mb-6">
                        {translation?.USER_LOGIN}
                    </Text>
                    <Paragraph className="mb-4" variant="DMSans16Medium125">
                        {translation?.LOGIN_WITH_YOUR_CREDENTIALS}
                    </Paragraph>

                    <TextInputField
                        label={translation?.EMAIL_OR_PHONE}
                        placeholder={translation?.ENTER_EMAIL_OR_PHONE}
                        wrapperClass="mb-[10px]"
                        isShowRequired
                    />

                    <TextInputField
                        label={translation?.PASSWORD}
                        placeholder={translation?.ENTER_PASSWORD}
                        wrapperClass="mb-4"
                        isEyeShow
                        type="password"
                        isShowRequired
                        iconWrapperClassName='cursor-pointer '
                    />

                    <div className="mb-3">
                        <label className="mb-3 flex items-center text-sm">
                            <input
                                type="checkbox"
                                className="mr-2 border-gray-300 focus:ring focus:ring-blue-300"
                            />
                            Remember me?
                        </label>
                    </div>
                    <ThemeButton
                        text={translation?.LOGIN}
                        sx={{ width: '100%', py: [2, 2, 2, 2, 2, 2, 3] }}
                    />
                </Box>
            </Box>
        </Box>

    )
}
