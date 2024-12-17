'use client'

export const SignInComponent = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg flex max-w-5xl w-full">
                {/* Left Section with Illustration */}
                <div className="hidden md:flex flex-1 bg-blue-50 items-center justify-center p-6">
                    <img
                        src="https://images.pexels.com/photos/1251516/pexels-photo-1251516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Illustration"
                        className="max-w-xs md:max-w-sm"
                    />
                </div>

                {/* Right Section with Login Form */}
                <div className="flex-1 p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Welcome back
                        </h1>
                        <p className="text-gray-600">
                            New here?{" "}
                            <a
                                href="/signup"
                                className="text-blue-500 hover:underline font-medium"
                            >
                                Create an account
                            </a>
                        </p>
                    </div>

                    <form>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-1"
                            >
                                Enter email id
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="user@email.com"
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-medium mb-1"
                            >
                                Enter password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="********"
                                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 px-4 py-2"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800"
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="mb-3">
                            <label className="mb-3 flex items-center text-sm">
                                <input
                                    type="checkbox"
                                    className="mr-2 border-gray-300 focus:ring focus:ring-blue-300"
                                />
                                Remember me?
                            </label>

                            <a
                                href="#"
                                className="text-blue-500 text-sm hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-medium shadow hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </form>

                    {/* Or Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-4 text-gray-500 text-sm">Gayatri Travels</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Login Buttons */}


                    {/* Footer */}
                    {/* <p className="text-center text-gray-500 text-sm mt-8">
              Gayatri Travels. Built by HD.
            </p> */}
                </div>
            </div>
        </div>

    )
}
