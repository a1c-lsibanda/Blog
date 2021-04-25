import React, { Component } from "react"
import ReactDOM from "react-dom"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function MainRoute() {
    return (
        <Router>
            <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div class="flex flex-col flex-1 w-full">
                    <Header />
                    <Main />
                </div>
                {/* <Switch>
                    <Route path="/employee/index" exact component={List} />
                    <Route path="/employee/form" component={Form} />
                    <Route path="/employee/edit/:id" component={Edit} />
                </Switch> */}
            </div>
        </Router>
    );
}

export default MainRoute;
ReactDOM.render(<MainRoute />, document.getElementById("router"));
