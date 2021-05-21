import React from "react"

import Login from "./views/Login"
import Dashboard from "./views/Dashboard"
import Register from "./views/Register"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function Routes() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Dashboard} title="welcome" />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </div>
    );
}

export default Routes;