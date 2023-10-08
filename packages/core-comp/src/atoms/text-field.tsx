import {useFrameworkContext} from "../ctx";

export const TextField = () => {
    const {prefix} = useFrameworkContext()
    return (
        <input {...(prefix && {id:`${prefix}-text`})} type={"text"}/>
    )
}