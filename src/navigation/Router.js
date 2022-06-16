import React from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {ContLogin} from "../pages/login/ContLogin";

function Router() {

    return (
        <>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ContLogin/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
        </>
    )
}

export default Router