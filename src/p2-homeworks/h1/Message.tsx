import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={classes.angle}></div>
            <div className={classes.message}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.text}>
                    {props.message}
                    <div className={classes.time}>
                        <span>{props.time}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Message
