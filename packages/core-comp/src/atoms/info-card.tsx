import React from 'react';
import {useIdContext} from "../ctx";

export const InfoCard = (props: any) => {

    const {pMsg} = useIdContext()
    console.log('Received: ', pMsg)

    return (
        <div {...(pMsg.includes('info') && {id: pMsg})}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

