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
import {ContForgotPassword} from "pages/forgotpassword/cont_forgot_password";
import {ContRecoverPassword} from "pages/recoverpassoword/cont_recover_password";
import {ContRegister} from "pages/register/cont_register";
import {ContRegisterForm} from "pages/registerform/cont_register_form";
import {ContSinglePrediction} from "../pages/prediction/single/cont_single_prediction";
import PredictionMassiveProvider from "../business/prediction/massive/provider";
import PredictionProvider from "../business/prediction/single/provider";
import {ContProfile} from "../pages/profile/cont_profile";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={routes.EMPTY} element={<ContLogin/>}/>
                <Route exact path={routes.PRINCIPAL} element={<ContPrincipal/>}/>
{/*
                <Route exact path={routes.PREDICTION} element={}/>
*/}
                <Route exact path={routes.OPTIONS} element={<ContOptions/>}/>
                <Route exact path={routes.SIGN_UP} element={<ContRegister/>}/>
                <Route exact path={routes.SIGN_UP_FORM} element={<ContRegisterForm/>}/>
                <Route exact path={routes.TUTORIAL} element={<ContTutorial/>}/>
                <Route exact path={routes.HISTORY} element={<ContHistory/>}/>
                <Route exact path={routes.Forgot_Password} element={<ContForgotPassword/>}></Route>
                <Route exact path={routes.Recover_Password} element={<ContRecoverPassword/>}></Route>
                <Route exact path={routes.PROFILE} element={<ContProfile/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
