import {SolutionProvider} from "./solution-provider";
import {FrameWorkProvider} from "@pnpm-monorepo/core";

export const SolutionWrapper = ({sMsg, children}: any) => {
    return (
        <SolutionProvider msg={sMsg}>
            {(param: any) => (
                <FrameWorkProvider pMsg={param}>
                    {children}
                </FrameWorkProvider>
            )}
        </SolutionProvider>
    )
}