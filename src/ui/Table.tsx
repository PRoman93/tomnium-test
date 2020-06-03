import React from "react";
import s from'./Table.module.css';
type OwnPropsType = {
    keys:string[],
    values: number[],
    timestamp:number,
    base:string
}
const Table:React.FC<OwnPropsType> = ({keys, values, timestamp, base}) => {

    const newKeys = keys.map(key=><div>{key}</div>)
    const newValues = values.map(value=><div>{value}</div>)

    return(
        <table>
            <span>timestamp: {timestamp}, </span>
            <span>base: {base}, </span>
            <span>rates: </span>
            <tr>
                <th>name</th>
                <th>price</th>
            </tr>
            <tr>
                <td>{newKeys}</td>
                <td>{newValues}</td>
            </tr>
        </table>
    )
}
export default Table
