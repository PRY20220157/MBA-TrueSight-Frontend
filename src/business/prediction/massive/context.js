import {createContext, useContext} from "react";

export const PredictionMassiveContext = createContext();
export const usePredictionMassiveContext = () => useContext(PredictionMassiveContext);