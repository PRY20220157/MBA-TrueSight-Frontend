import {useEffect, useState} from "react";
import {getAverage} from "api/api_prediction";

export const useObservations = () => {

    const [avgs, setAvgs] = useState({
        predictionAverageValuesId: 0,
        gmatAvg: "000.00",
        gpaAvg: "0.00",
        gradGpaAvg: "0.00",
        workExpAvg: "0.00",
        appTypeAvg: 0,
        averageType: 0,
        creationDate: ""
    });
    const [obsGmatAvg, setObsGmatAvg] = useState('');
    const [obsGpaAvg, setObsGpaAvg] = useState('');
    const [obsGradGpa, setObsGradGpa] = useState('');
    const [obsWorkXpAvg, setObsWorkXpAvg] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getAvgs()
    }, []);

    const getAvgs = () => {
        setLoading(true)
        getAverage().then(r => {
            setAvgs(r)
            setLoading(false)
        })
    }

    const getObservations = (gmat, gpa, wkxp, type, result) => {
        setLoading(true)
        getAverage().then(r => {
            console.log(r)
            handleObsGmat(gmat, r.gmatAvg)
            handleObsGpa(gpa, r.gpaAvg)
            handleObsGradDpa(result, r.gradGpaAvg)
            handleObsWkXp(wkxp, r.workExpAvg)
            setLoading(false)
        })
    }

    const handleObsGmat = (gmat, gmatAvg) => {
        let a = parseFloat(gmat)
        let b = parseFloat(gmatAvg)
        console.log(a, b)
        if (a > b)
            setObsGmatAvg('a');
        if (a < b)
            setObsGmatAvg('b');

    }
    const handleObsGpa = (gpa, gpaAvg) => {
        let a = parseFloat(gpa)
        let b = parseFloat(gpaAvg)

        if (a > b)
            setObsGpaAvg('c')
        if (a < b)
            setObsGpaAvg('d')

    }
    const handleObsWkXp = (wkxp, workExpAvg) => {
        let a = parseFloat(wkxp)
        let b = parseInt(workExpAvg)
        if (a > b)
            setObsWorkXpAvg('e');
        if (a < b)
            setObsWorkXpAvg('f');
    }
    const handleObsGradDpa = (gradDpa, gradGpaAvg) => {
        let a = parseFloat(gradDpa)
        let b = parseFloat(gradGpaAvg)
        if (a > b)
            setObsGradGpa('g');
        if (a < b)
            setObsGradGpa('El posible puntaje obtenido se encuentra por debajo del promedio');

    }

    return {
        getObservations, obsGmatAvg, obsGpaAvg, obsGradGpa, obsWorkXpAvg, getAvgs, avgs,loading
    }

}