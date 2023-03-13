import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Table from "./components/table";
import Login from "./layouts/login";
import Analytics from "./layouts/analytics";
import Main from "./layouts/main";

function App() {
    return (
        <>
            <NavBar/>
            <div className="main">
                <Switch>
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/tasks/:taskId?/:edit?" component={Table}/>
                    <Route path="/analytics" component={Analytics} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </>
    );
}

export default App;
