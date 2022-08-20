import {useNavigate} from "react-router";
import routes from "../router/routes";

function usePrincipal(){

    const navigate = useNavigate();

    const goToPrediction = () => {
        navigate(routes.PREDICTION);
    }
    const goToHistory = () => {
        navigate(routes.HISTORY);
    }
    const goToTutorial = () => {
        navigate(routes.TUTORIAL);
    }
    const goToOptions = () => {
        navigate(routes.OPTIONS);
    }


    return {
        goToPrediction,
        goToHistory,
        goToTutorial,
        goToOptions
    }

}
export default usePrincipal;