import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function Dashboard() {
    return (
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
    );
}

export default Dashboard;