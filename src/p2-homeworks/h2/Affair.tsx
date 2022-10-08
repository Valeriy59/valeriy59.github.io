import React from 'react'
import {AffairType, FilterType} from "./HW2";
import classes from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}



function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    const priorityColor = (filter: FilterType) => {
        return classes.buttonX
    }
    return (
        <div className={classes.container}>
            <div>{props.affair.name}</div>
            <div className={priorityColor(props.affair.priority)}>[{props.affair.priority}]</div>

            <div><button className={classes.buttonX} onClick={deleteCallback}>X</button></div>
        </div>
    )
}

export default Affair
