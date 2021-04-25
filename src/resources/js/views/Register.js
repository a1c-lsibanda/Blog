import React, { Component } from "react";
import ReactDOM from "react-dom";

class Register extends Component {
    render() {
        return (
            <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
                <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                    <div class="flex flex-col overflow-y-auto md:flex-row">
                        <div class="h-32 md:h-auto md:w-2/3">
                            <img
                                aria-hidden="true"
                                class="object-cover w-full h-full dark:hidden"
                                src="https://source.unsplash.com/2qKrvxgPsQ8/400*300"
                                alt="Light Phone"
                            />
                            <img
                                aria-hidden="true"
                                class="hidden object-cover w-full h-full dark:block"
                                src="https://source.unsplash.com/2qKrvxgPsQ8/400*300"
                                alt="Dark Phone"
                            />
                        </div>
                        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div class="w-full">
                                <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200 text-center">
                                    Register
                                </h1>
                                <form>
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">
                                            First Name
                                        </span>
                                        <input
                                            type="text"
                                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            placeholder="John"
                                        />
                                    </label>
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">
                                            Surname
                                        </span>
                                        <input
                                            type="text"
                                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            placeholder="Doe"
                                        />
                                    </label>
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">
                                            E-mail
                                        </span>
                                        <input
                                            type="text"
                                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            placeholder="example@example.com"
                                        />
                                    </label>
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">
                                            Password
                                        </span>
                                        <input
                                            type="text"
                                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            placeholder="***************"
                                        />
                                    </label>
                                    <label class="block mt-4 text-sm">
                                        <span class="text-gray-700 dark:text-gray-400">
                                            Confirm
                                        </span>
                                        <input
                                            type="text"
                                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                            placeholder="***************"
                                        />
                                    </label>
                                    <div class="flex mt-6 text-sm">
                                        <label class="flex items-center dark:text-gray-400">
                                        <input
                                            type="checkbox"
                                            class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                        />
                                        <span class="ml-2">
                                            I agree to the <span class="underline"> privacy policy</span>
                                        </span>
                                        </label>
                                    </div>
                                    <button
                                        class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                        href="./login.html"
                                    >
                                        Create account
                                    </button>
                                    <hr class="my-8" />
                                    <p class="mt-4">
                                        <a
                                            class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                            href="/login"
                                        >
                                            Already have an account? Login
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;

if (document.getElementById("register")) {
    ReactDOM.render(<Register />, document.getElementById("register"));
}
