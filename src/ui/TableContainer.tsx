import React, {useEffect, useState} from "react";
import Table from "./Table";
import {getData} from "../bll/dataReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import s from './Table.module.css'

const TableContainer = () => {

    const [timerDone, setTimerDone] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        if (!valid) setTimeout(() => {
            setTimerDone(true);
        }, 1000)
        dispatch(getData())
    }, [])

    const valid = useSelector((state: AppStateType) => state.reducer.data.valid)
    const keys = useSelector((state: AppStateType) => Object.keys(state.reducer.data.rates))
    const values = useSelector((state: AppStateType) => Object.values(state.reducer.data.rates).map(value => Number(value)))
    const timestamp = useSelector((state: AppStateType) => state.reducer.data.timestamp)
    const base = useSelector((state: AppStateType) => state.reducer.data.base)

    return (
        <>
            {timerDone
                ? <Table base={base} timestamp={timestamp} keys={keys} values={values}/>
                : <div className={s.wait}>wait..</div>
            }
        </>
    )
}


export default TableContainer
