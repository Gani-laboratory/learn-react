import React from "react";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import About from "../Components/About";
// import Bot from "../Components/Bot";
import HelloWorld from "../Components/HelloWorld";
import Home from "../Components/Home";
const Routes = () => {
    return (
        <Router>
            <HelloWorld/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                {/* <Route exact path="/bot"> */}
                    {/* <Bot/> */}
                {/* </Route> */}
            </Switch>
        </Router>
    )
}
export default Routes;