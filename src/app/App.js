import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Table from "./components/table";
import Login from "./layouts/login"
import Analytics from "./layouts/analytics"


function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/analytics" component={Analytics} />
                <Route path="/" exact component={Table} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
