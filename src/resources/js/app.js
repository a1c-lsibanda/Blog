// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes React and other helpers. It's a great starting point while
//  * building robust, powerful web applications using React + Laravel.
//  */

require('./bootstrap');

// /**
//  * Next, we will create a fresh React component instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

import React from "react";
import { render } from "react-dom";
import Routes from "./Router";
import { BrowserRouter } from "react-router-dom";


import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";


render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Routes />,
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById("app")
);