
const routes = Object.freeze({
    EMPTY: "/",
    SIGN_IN: "/",
    SIGN_UP: "/sign-up",
    SIGN_UP_FORM: "/sign-up/form",
    Forgot_Password:"/forgotpassword",
    Recover_Password:"/password/reset/confirm/:uid/:token",
    PRINCIPAL:"/main",
    PREDICTION: "/prediction",
    MASSIVE_PREDICTION: "/massive_prediction",
    HISTORY: "/history",
    HistoryDate: "/history/:date",
    TUTORIAL: "/tutorial",
    OPTIONS: "/options",
    PROFILE:"/profile"
});

export default routes;
