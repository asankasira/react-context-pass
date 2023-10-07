export const SolutionProvider = ({msg, children}: any) => {

    return (
        <>
            {typeof children === 'function' ? children(msg) : children}
        </>
    )
}