import {SolutionProvider} from "./solution-provider";
import {FrameWorkProvider} from "@pnpm-monorepo/core";

export const SolutionProviderWrapper = ({sMsg, children}: any) => {
    //can access context info passed to FrameworkProvider
    return (
        <SolutionProvider msg={sMsg} renderItem = {(param: any) => (
            <FrameWorkProvider prefix={param}>
                {children}
            </FrameWorkProvider>
        )}/>
    )
}