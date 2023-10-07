import React from 'react';
import {useIdContext} from "../ctx";
import {TextField} from "./text-field";

export const InfoCard = (props: any) => {

    const {pMsg} = useIdContext()
    console.log('Received: ', pMsg)

    return (
        <div {...(pMsg && {id: pMsg})}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <TextField/>
        </div>
    );
}

