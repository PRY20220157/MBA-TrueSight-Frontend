import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import {ContPrincipal} from "../pages/principal/cont_principal";
import {ContOptions} from "../pages/options/cont_options";
import {ContPrediction} from "../pages/prediction/cont_prediction";
import {ContTutorial} from "../pages/tutorial/cont_tutorial";
import routes from "./routes";
import {Navigate, Routes} from "react-router";
import {ContLogin} from "../pages/login/cont_login";
import {ContHistory} from "../pages/history/cont_history";
import {ContMassivePrediction} from "../pages/prediction/massive/cont_massive_prediction";

function Router() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path={routes.EMPTY} element={<ContLogin/>}/>
                    <Route exact path={routes.PRINCIPAL} element={<ContPrincipal/>}/>
                    <Route exact path={routes.PREDICTION} element={<ContPrediction/>}/>
                    <Route exact path={routes.OPTIONS} element={<ContOptions/>}/>
                    <Route exact path={routes.TUTORIAL} element={<ContTutorial/>}/>
                    <Route exact path={routes.HISTORY} element={<ContHistory/>}/>
                    <Route exact path={routes.MASSIVE_PREDICTION} element={<ContMassivePrediction/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default Router