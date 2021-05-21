import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";

import { gql, ApolloProvider, useMutation } from "@apollo/client";
import client from "../apollo-client";

const USER_LOGIN = gql`
    mutation UserLogin($username: String!, $password: String!) {
        login(input: { username: $username, password: $password }) {
            access_token
            refresh_token
            expires_in
            token_type
        }
    }
`;

function UserLogin() {
    const history = useHistory();
    //
    const [username, setUsername] = React.useState("");
    //
    const [password, setPassword] = React.useState("");
    //
    const [login, { loading: mutationLoading, error: mutationError}] = useMutation(USER_LOGIN, {
        onCompleted: (data) =>  {
            // remove all
            // localStorage.clear();
            // set token in localStrorage
            localStorage.setItem("token", data.login.access_token);

            // this.props.history.push("/");
        },
        onError: (error) => console.error("Error creating a post", error),
    });
    // const [login, { loading: mutationLoading, error: mutationError }] = useMutation(USER_LOGIN);

    if (mutationLoading) return <p>Loading...</p>;
    if (mutationError) return <p>Error :(</p>;

    function handleUserLogin(event) {
        event.preventDefault();
        // the mutate function also doesn't return a promise
        login({ variables: { username, password } }).then(({ data }) => {
            localStorage.setItem("token2", "data.access_token1");
            history.push("/");
        });
    }

    return (
        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200 text-center">
                    Login
                </h1>
                <form onSubmit={handleUserLogin} >
                    <label className="block mt-4 text-sm">
                        <span className="text-gray-700 dark:text-gray-400">
                            E-mail
                        </span>
                        <input
                            type="text"
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            placeholder="john@doewewew.com"
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                        />
                    </label>
                    <label className="block mt-4 text-sm">
                        <span className="text-gray-700 dark:text-gray-400">
                            Password
                        </span>
                        <input
                            type="text"
                            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                            placeholder="*************"
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </label>
                    <button
                        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        href="../index.html"
                        type="submit"
                    >
                        Log in
                    </button>
                    <hr className="my-8" />
                    <p className="mt-1">
                        <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline" href="/forgot">
                            {" "}
                            Forgot your password?
                        </a>
                    </p>
                    <p className="mt-1">
                        <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                        component={Link} to="/">
                            Create account
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}

function Login() {
    return (
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <div className="flex flex-col overflow-y-auto md:flex-row">
                    <div className="h-32 md:h-auto md:w-2/3">
                        <img
                            aria-hidden="true"
                            className="object-cover w-full h-full dark:hidden"
                            src="https://source.unsplash.com/2qKrvxgPsQ8/400*300"
                            alt="Light Phone"
                        />
                        <img
                            aria-hidden="true"
                            className="hidden object-cover w-full h-full dark:block"
                            src="https://source.unsplash.com/2qKrvxgPsQ8/400*300"
                            alt="Dark Phone"
                        />
                    </div>
                    <UserLogin />
                </div>
            </div>
        </div>
    );
}

export default Login;