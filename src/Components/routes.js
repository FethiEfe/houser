import React from "react"
import Dashboard from "./Dashboard/Dashboard"
import Wizard from "./Wizard/Wizard"
import { Switch, Route } from "react-router-dom"
import StepOne from "./Wizard/StepOne"
import StepTwo from "./Wizard/StepTwo"
import StepThree from "./Wizard/StepThree"

export  default(
    <Switch>
        <Route exact path = "/" component={Dashboard} />
        <Route  path = "/wizard/step1" component = {StepOne} />
        <Route  path = "/wizard/step2" component = {StepTwo}/>
        <Route  path = "/wizard/step3" component = {StepThree}/>
    </Switch>
)