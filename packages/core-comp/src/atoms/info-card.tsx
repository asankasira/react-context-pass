import React from 'react';
import {useFrameworkContext} from "../ctx";
import {TextField} from "./text-field";

export const InfoCard = (props: any) => {

    const {prefix} = useFrameworkContext()
    console.log('Received: ', prefix)

    return (
        <div {...(prefix && {id: prefix})}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <TextField/>
        </div>
    )
}

