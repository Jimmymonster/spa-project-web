import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./routes/Home";
import DataDetail from "./routes/DataDetail";
import Update from "./routes/Update";
import { DataContextProvider } from "./context/dataContext";
const App = () => {
    return (
        <DataContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/data/:id/update" component={Update} />
                        <Route exact path="/data/:id" component={DataDetail} />
                    </Switch>
                </Router>
            </div>
        </DataContextProvider>
    )
}

export default App;