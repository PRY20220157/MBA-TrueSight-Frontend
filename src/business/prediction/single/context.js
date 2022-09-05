import { createContext, useContext } from "react";

export const PredictionContext =createContext();
export const usePredictionContext = () =>useContext(PredictionContext);