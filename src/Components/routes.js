import React, {Component} from "react"
import Dashboard from "./Dashboard"
import Wizard from "./Wizard"
import { Switch, Route } from "react-router-dom"

export  default(
    <Switch>
        <Route exact path = "/" component={Dashboard} />
        <Route exact path = "/wizard" component={Wizard} />
    </Switch>
)