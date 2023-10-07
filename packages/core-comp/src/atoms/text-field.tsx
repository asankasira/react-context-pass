import {useIdContext} from "../ctx";

export const TextField = () => {
    const {pMsg} = useIdContext()
    return (
        <input {...(pMsg && {id:`${pMsg}-text`})} type={"text"}/>
    )
}