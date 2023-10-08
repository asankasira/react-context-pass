export const SolutionProvider = ({msg, renderItem}: any) => {
    //Or can pass props to renderItem function from here
    return (
        <>
            {renderItem(msg)}
        </>
    )
}