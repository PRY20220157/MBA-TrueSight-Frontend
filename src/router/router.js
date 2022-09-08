import React from "react"
import {BrowserRouter, Route} from "react-router-dom";
import {ContPrincipal} from "../pages/principal/cont_principal";
import {ContOptions} from "../pages/options/cont_options";
import {ContTutorial} from "../pages/tutorial/cont_tutorial";
import routes from "./routes";
import {Navigate, Routes} from "react-router";
import {ContLogin} from "../pages/login/cont_login";
import {ContHistory} from "../pages/history/cont_history";
import {ContMassivePrediction} from "../pages/prediction/massive/cont_massive_prediction";
import HistoryDate from "pages/history/history_date/view_history_date";
import { ContHistoryDate } from "pages/history/history_date/cont_history_date";
import { ContForgotPassword } from "pages/forgotpassword/cont_forgot_password";
import { ContRecoverPassword } from "pages/recoverpassoword/cont_recover_password";
import { ContRegister } from "pages/register/cont_register";
import { ContRegisterfORM } from "pages/registerform/cont_register_form";
import {ContSinglePrediction} from "../pages/prediction/single/cont_single_prediction";
import PredictionMassiveProvider from "../business/prediction/massive/provider";

function Router() {

    return (
        <BrowserRouter>
                <Routes>
                    <Route exact path={routes.EMPTY} element={<ContLogin/>}/>
                    <Route exact path={routes.PRINCIPAL} element={<ContPrincipal/>}/>
                    <Route exact path={routes.PREDICTION} element={<ContSinglePrediction/>}/>
                    <Route exact path={routes.OPTIONS} element={<ContOptions/>}/>
                    <Route exact path={routes.SIGN_UP} element={<ContRegister/>}/>
                    <Route exact path={routes.SIGN_UP_Form} element={<ContRegisterfORM/>}/>
                    <Route exact path={routes.TUTORIAL} element={<ContTutorial/>}/>
                    <Route exact path={routes.HISTORY} element={<ContHistory/>}/>
                    <Route exact path={routes.MASSIVE_PREDICTION} element={<PredictionMassiveProvider><ContMassivePrediction/></PredictionMassiveProvider>}/>
                    <Route exact path={routes.HistoryDate}  element={<ContHistoryDate/>}></Route>
                    <Route exact path={routes.Forgot_Password} element={<ContForgotPassword/>}></Route>
                    <Route exact path={routes.Recover_Password} element={<ContRecoverPassword/>}></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default Router